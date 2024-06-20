/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, i as renderTransition, d as addAttribute, f as createAstro } from '../astro_DXvJ5a2x.mjs';
import { jsx } from 'react/jsx-runtime';
import { C as CardPlayButton } from './_id__C97lGkKA.mjs';
/* empty css                          */
import { p as playlists, $ as $$Layout } from './404_CoA-A9-u.mjs';

const Greetings = () => {
  const currentDate = /* @__PURE__ */ new Date();
  const currentHour = currentDate.getHours();
  let greeting = "";
  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }
  return /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: greeting });
};

const $$Astro = createAstro();
const $$PlaylistItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlaylistItemCard;
  const {
    playlist: { id, title, artists, cover }
  } = Astro2.props;
  const artistString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="flex group relative rounded-md bg-zinc-500/30 hover:bg-[#f6f6f6]/30 shadow-lg hover:shadow-xl transition-all duration-500"> <div class="absolute right-4 top-28 translate-y-4 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-10"> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/CardPlayButton", "client:component-export": "CardPlayButton", "data-astro-transition-scope": renderTransition($$result, "eezcrcpf", "", `playlist ${id} button`) })} </div> <a class="flex flex-col playlist-item relative p-2 overflow-hidden gap-2 w-44"${addAttribute(`playlist/${id}`, "href")}${addAttribute(renderTransition($$result, "kljxcvf4", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto flex-none rounded-md"> <img${addAttribute(`${cover}`, "src")}${addAttribute(`Cover of ${title} by ${artistString}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result, "3vjvs5qv", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col px-2"> <h4 class="font-semibold line-clamp-1"${addAttribute(renderTransition($$result, "l3uzvahc", "", `playlist ${id} title`), "data-astro-transition-scope")}> ${title} </h4> <span class="font-extralight text-sm text-gray-400 line-clamp-2"${addAttribute(renderTransition($$result, "ufpo2sxj", "", `playlist ${id} artists`), "data-astro-transition-scope")}>${artistString}</span> </div> </a> </article>`;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/components/PlaylistItemCard.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u{1F7E2}\u{1F3A7} Spotify Clone \u{1F680}\u{1F9D1}\u200D\u{1F680}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-green-600"> <div class="relative z-10 px-6 pt-10"> ${renderComponent($$result2, "Greetings", Greetings, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/Greetings", "client:component-export": "Greetings" })} <div class="flex flex-wrap mt-6 gap-4 flex-row overflow-x-auto"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlaylistItemCard", $$PlaylistItemCard, { "playlist": playlist })}`)} </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 to-zinc-900/80"></div> </div> ` })} `;
}, "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/pages/index.astro", void 0);

const $$file = "/Users/carlospalf/Documents/dev/spotify-clone-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
