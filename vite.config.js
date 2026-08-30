import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Custom dev middleware for /api/spotify so it works in local development with `npm run dev`
function spotifyDevPlugin() {
  return {
    name: 'spotify-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/spotify', async (req, res) => {
        try {
          const env = loadEnv(server.config.mode, process.cwd(), '');
          const clientId = env.SPOTIFY_CLIENT_ID;
          const clientSecret = env.SPOTIFY_CLIENT_SECRET;
          const refreshToken = env.SPOTIFY_REFRESH_TOKEN;

          if (!clientId || !clientSecret || !refreshToken) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ error: 'Missing Spotify environment variables' }));
          }

          const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
          const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${basic}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              grant_type: 'refresh_token',
              refresh_token: refreshToken,
            }),
          });

          const tokenData = await tokenRes.json();
          const accessToken = tokenData.access_token;

          if (!accessToken) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ error: 'Failed to obtain access token' }));
          }

          // 1. Try currently playing
          try {
            const nowPlayingRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
              headers: { Authorization: `Bearer ${accessToken}` },
            });

            if (nowPlayingRes.status === 200) {
              const song = await nowPlayingRes.json();
              if (song && song.item) {
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({
                  isPlaying: song.is_playing,
                  title: song.item.name,
                  artist: song.item.artists.map((a) => a.name).join(', '),
                  album: song.item.album.name,
                  albumImageUrl: song.item.album.images[0]?.url,
                  songUrl: song.item.external_urls.spotify,
                }));
              }
            }
          } catch (err) {
            console.warn('Could not fetch currently playing track:', err);
          }

          // 2. Fallback to recently played
          const recentRes = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: { Authorization: `Bearer ${accessToken}` },
          });

          if (recentRes.status === 200) {
            const data = await recentRes.json();
            const recent = data.items?.[0];
            if (recent && recent.track) {
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({
                isPlaying: false,
                title: recent.track.name,
                artist: recent.track.artists.map((a) => a.name).join(', '),
                album: recent.track.album.name,
                albumImageUrl: recent.track.album.images[0]?.url,
                songUrl: recent.track.external_urls.spotify,
                playedAt: recent.played_at,
              }));
            }
          }

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ isPlaying: false, message: 'No tracks found' }));
        } catch (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: err.message }));
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spotifyDevPlugin()],
})

