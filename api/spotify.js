const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async (client_id, client_secret, refresh_token) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export default async function handler(req, res) {
  try {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!client_id || !client_secret || !refresh_token) {
      return res.status(200).json({ isPlaying: false, message: "Spotify environment variables not set" });
    }

    const tokenData = await getAccessToken(client_id, client_secret, refresh_token);
    const access_token = tokenData.access_token;

    if (!access_token) {
      return res.status(200).json({ isPlaying: false, message: "Unable to retrieve access token" });
    }

    // 1. Try fetching currently playing track
    try {
      const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (nowPlayingRes.status === 200) {
        const song = await nowPlayingRes.json();
        if (song && song.item) {
          return res.status(200).json({
            isPlaying: song.is_playing,
            title: song.item.name,
            artist: song.item.artists.map((_artist) => _artist.name).join(", "),
            album: song.item.album.name,
            albumImageUrl: song.item.album.images[0]?.url,
            songUrl: song.item.external_urls.spotify,
          });
        }
      }
    } catch (e) {
      console.warn("Could not fetch currently playing:", e);
    }

    // 2. Fallback to recently played track
    const recentlyPlayedRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (recentlyPlayedRes.status === 200) {
      const data = await recentlyPlayedRes.json();
      const recent = data.items && data.items[0];

      if (recent && recent.track) {
        return res.status(200).json({
          isPlaying: false,
          title: recent.track.name,
          artist: recent.track.artists.map((_artist) => _artist.name).join(", "),
          album: recent.track.album.name,
          albumImageUrl: recent.track.album.images[0]?.url,
          songUrl: recent.track.external_urls.spotify,
          playedAt: recent.played_at,
        });
      }
    }

    return res.status(200).json({ isPlaying: false, message: "No tracks found" });
  } catch (error) {
    console.error("Spotify API error:", error);
    return res.status(500).json({ error: "Failed to fetch Spotify data" });
  }
}
