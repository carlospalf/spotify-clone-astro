import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DoSsRbRW.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CoUYWX1e.mjs');
const _page1 = () => import('./chunks/404_BJhMXv-L.mjs');
const _page2 = () => import('./chunks/get-info-playlist_CfN2w-Jx.mjs');
const _page3 = () => import('./chunks/_id__BkSp0Sop.mjs');
const _page4 = () => import('./chunks/index_D5LUgdW3.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.10.2_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/get-info-playlist.json.ts", _page2],
    ["src/pages/playlist/[id].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9a038aac-3aca-4980-a2e5-adb4f932ea8f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
