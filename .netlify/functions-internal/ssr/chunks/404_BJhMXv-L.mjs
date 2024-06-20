export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_CoA-A9-u.mjs').then(n => n._);

export { page };
