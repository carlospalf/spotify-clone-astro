import { b as allPlaylists, s as songs } from './404_CoA-A9-u.mjs';

function getAstroQueryParams(request) {
  const url = new URL(request.url);
  return Object.fromEntries(url.searchParams);
}
const GET = async ({ request }) => {
  const query = getAstroQueryParams(request);
  const id = query.id;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const songs$1 = playlist ? songs.filter((song) => song.albumId === playlist.albumId) : [];
  return new Response(JSON.stringify({ playlist, songs: songs$1 }), {
    headers: { "content-type": "application/json" }
  });
};

export { GET, getAstroQueryParams };
