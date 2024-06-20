import { allPlaylists, songs as allSongs } from "@lib/data";
import type { APIRoute } from "astro";

export function getAstroQueryParams(request: Request) {
  const url = new URL(request.url);
  return Object.fromEntries(url.searchParams);
}

export const GET: APIRoute = async ({ request }) => {
  const query = getAstroQueryParams(request);
  const id = query.id;

  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  const songs = playlist
    ? allSongs.filter((song) => song.albumId === playlist.albumId)
    : [];

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" },
  });
}