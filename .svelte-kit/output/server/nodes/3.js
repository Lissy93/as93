import * as server from '../entries/pages/_repo_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_repo_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[repo]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.wTDaldEG.js","_app/immutable/chunks/0HuHagjb.js","_app/immutable/chunks/NSV_DA2K.js","_app/immutable/chunks/HdumK7dF.js","_app/immutable/chunks/P3hBu4d8.js","_app/immutable/chunks/tAQdEg6c.js","_app/immutable/chunks/KRU0y7Nu.js","_app/immutable/chunks/x1IK5hzF.js","_app/immutable/chunks/AuggO1Wj.js"];
export const stylesheets = ["_app/immutable/assets/ProjectReadme.e7ebC1QG.css","_app/immutable/assets/Icon.fCVDIlbE.css","_app/immutable/assets/3.su6X5RWK.css"];
export const fonts = [];
