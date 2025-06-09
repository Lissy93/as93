import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.L3tdNnnO.js","_app/immutable/chunks/NSV_DA2K.js","_app/immutable/chunks/HdumK7dF.js","_app/immutable/chunks/tAQdEg6c.js","_app/immutable/chunks/P3hBu4d8.js","_app/immutable/chunks/4AjdUs8x.js","_app/immutable/chunks/AuggO1Wj.js"];
export const stylesheets = ["_app/immutable/assets/Icon.fCVDIlbE.css","_app/immutable/assets/ProjectReadme.e7ebC1QG.css","_app/immutable/assets/2.quqm-cM5.css"];
export const fonts = [];
