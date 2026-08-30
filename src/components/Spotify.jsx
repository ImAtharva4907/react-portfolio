import { useEffect, useState } from "react";
import { FaSpotify, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Spotify = ({ variants }) => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        if (data && data.title) {
          setTrack(data);
        }
      } catch (err) {
        console.error("Spotify component fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !track) {
    return null;
  }

  const defaultVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <motion.div
      variants={variants || defaultVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md mx-auto lg:mx-0 my-2"
    >
      <a
        href={track.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3.5 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3 pr-4 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-emerald-500/10"
      >
        {/* Album Artwork */}
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl shadow-md">
          <img
            src={track.albumImageUrl}
            alt={track.album || track.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Track Details */}
        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <div className="flex items-center gap-1.5">
              <FaSpotify className="text-base text-[#1DB954] transition-transform duration-300 group-hover:rotate-12 flex-shrink-0" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                {track.isPlaying ? "Listening Now" : "Recently Played"}
              </span>
            </div>

            {/* Live Animated Equalizer or Pulse Dot */}
            {track.isPlaying ? (
              <div className="flex items-end gap-0.5 h-3 flex-shrink-0">
                <span className="w-0.5 bg-[#1DB954] rounded-full animate-bounce h-2" style={{ animationDelay: "0ms" }} />
                <span className="w-0.5 bg-[#1DB954] rounded-full animate-bounce h-3" style={{ animationDelay: "150ms" }} />
                <span className="w-0.5 bg-[#1DB954] rounded-full animate-bounce h-2" style={{ animationDelay: "300ms" }} />
              </div>
            ) : (
              <span className="flex h-1.5 w-1.5 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            )}
          </div>

          {/* Title & Artist */}
          <p className="truncate text-xs font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">
            {track.title}
          </p>
          <p className="truncate text-[11px] text-neutral-400 font-light">
            {track.artist}
          </p>
        </div>

        {/* External Link Icon */}
        <div className="flex-shrink-0 text-neutral-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-emerald-400">
          <FaExternalLinkAlt className="text-xs" />
        </div>
      </a>
    </motion.div>
  );
};

export default Spotify;
