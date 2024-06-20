/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, d as addAttribute, f as createAstro, i as renderTransition } from '../astro_DXvJ5a2x.mjs';
import { jsx } from 'react/jsx-runtime';
import { u as usePlayerStore, P as Pause, a as Play, b as allPlaylists, s as songs, $ as $$Layout } from './404_CoA-A9-u.mjs';
import 'clsx';
/* empty css                          */

const CardPlayButton = ({ id, size = "medium" }) => {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic.playlist?.id === id;
  const handleClick = () => {
    if (isPlayingPlaylist || currentMusic.playlist?.id === id) {
      setIsPlaying(!isPlayingPlaylist);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`).then((response) => response.json()).then((data) => {
      const { playlist, songs } = data;
      setCurrentMusic({
        playlist,
        songs,
        song: isPlayingPlaylist ? currentMusic.song : songs[0]
      });
      setIsPlaying(true);
    });
  };
  const sizeClassName = `${size === "small" ? "h-9 w-9" : size === "medium" ? "h-12 w-12" : "h-14 w-14"}`;
  const iconClassName = `${size === "small" ? "text-black h-2 w-2" : size === "medium" ? "text-black h-4 w-4" : "text-black h-6 w-6"}`;
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `card-play-button flex items-center justify-center ${sizeClassName} rounded-full hover:scale-110 bg-green-600 hover:bg-green-400 hover:shadow-green-200 hover:shadow-circular transition-all duration-500`,
      onClick: handleClick,
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Pause, { className: iconClassName }) : /* @__PURE__ */ jsx(Play, { className: iconClassName })
    }
  );
};

const $$Time = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" role="img" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"> <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path> <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path> </svg>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/assets/icons/Time.astro", void 0);

const PlaylistPlaySongButton = ({ song, playlist, className }) => {
  const currentMusic = usePlayerStore((state) => state.currentMusic);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);
  const setCurrentMusic = usePlayerStore((state) => state.setCurrentMusic);
  const isPlayingSong = isPlaying && currentMusic.song?.id === song.id && currentMusic.song.albumId === song.albumId;
  const handleClick = () => {
    if (isPlayingSong) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setCurrentMusic({
        song,
        songs: [song],
        playlist
      });
    }
  };
  return /* @__PURE__ */ jsx("button", { className, onClick: handleClick, children: isPlayingSong ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {}) });
};

const $$Astro$1 = createAstro();
const $$MusicTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MusicTable;
  const { songs, playlist } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto text-left min-w-full divide-y divide-zinc-600/20"> <thead class=""> <th class="text-gray-400 text-sm font-light px-4 py-2 items-center text-center">
#
</th> <th class="text-gray-400 text-sm font-light px-4 py-2">Title</th> <th class="text-gray-400 text-sm font-light px-4 py-2">Album</th> <th class="text-gray-400 text-sm font-light px-4 py-2"> <div class="flex items-center justify-center"> ${renderComponent($$result, "TimeIcon", $$Time, {})} </div> </th> </thead> <tbody> <tr class="h-3"></tr> ${playlist && songs?.map((song, index) => renderTemplate`<tr class="group hover:bg-white/10 bg-transparent transition-all duration-500"> <td class="px-4 py-2 rounded-s-lg"> <div class="flex items-center justify-center relative"> <span class="flex relative opacity-100 group-hover:opacity-0"> ${index + 1} </span> ${renderComponent($$result, "PlaylistPlaySongButton", PlaylistPlaySongButton, { "playlist": playlist, "song": song, "className": "flex absolute opacity-0 group-hover:opacity-100 justify-center transition-all duration-300", "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/PlaylistPlaySongButton", "client:component-export": "PlaylistPlaySongButton" })} </div> </td> <td class="flex items-center gap-2 px-4 py-2"> <picture> <img${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")} class="w-10 h-10 rounded-md"> </picture> <div class="flex flex-col gap-[2px]"> <h3 class="">${song.title}</h3> <span class="text-xs font-extralight text-gray-400"> ${song.artists.join(", ")} </span> </div> </td> <td class="text-sm font-light px-4 py-2">${song.album}</td> <td class="text-sm font-light px-4 py-2 items-center text-center rounded-e-lg"> ${song.duration} </td> </tr>`)} </tbody> </table>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/components/MusicTable.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playlistSongs = playlist ? songs.filter((song) => song.albumId === playlist.albumId) : [];
  const durationAcc = playlistSongs.reduce((acc, song) => {
    const [minutes2, seconds] = song.duration.split(":");
    return acc + parseInt(minutes2 ?? 0) * 60 + parseInt(seconds ?? 0);
  }, 0);
  const hours = Math.floor(durationAcc / 60 / 24);
  const minutes = Math.ceil((durationAcc - hours * 60 * 24) / 60);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u{1F7E2}\u{1F3A7} Spotify Clone - Playlist ${id} \u{1F680}\u{1F9D1}\u200D\u{1F680}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="flex flex-col h-full relative bg-zinc-900 overflow-x-hidden"${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <header class="flex flex-row gap-8 px-6 mt-10 z-10"> <picture class="aspect-square w-52 h-52 flex-none rounded-md"> <img${addAttribute(`${playlist?.cover}`, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="object-cover w-full h-full shadow-lg"${addAttribute(renderTransition($$result2, "447rgqct", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end">Playlist</h2> <div> <h1 class="text-7xl title-clamp font-bold block"> ${playlist?.title} <span${addAttribute(renderTransition($$result2, "xqvi2465", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}></span> </h1> </div> <div class="flex flex-1 items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "5hvgcehm", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="mt-1"> <span>${`${playlistSongs.length} songs, about ${hours} hr ${minutes} min`}</span> </p> </div> </div> </div> </header> <section class="pl-6 pt-6 z-10"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "id": id ?? "", "size": "large", "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/CardPlayButton", "client:component-export": "default", "data-astro-transition-scope": renderTransition($$result2, "xcylnfbn", "", `playlist ${id} button`) })} </section> <section class="p-6 z-10"> ${renderComponent($$result2, "MusicTable", $$MusicTable, { "songs": playlistSongs, "playlist": playlist })} </section> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 to-zinc-900/80"></div> </div> ` })}`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/pages/playlist/[id].astro", "self");

const $$file = "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { CardPlayButton as C, _id_ as _ };
