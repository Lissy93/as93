import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const css = {
  code: "h1.svelte-xue1a1{font-size:6rem;margin:0;padding:1rem;text-align:center;opacity:0.6}.emoji.svelte-xue1a1{font-size:5rem;margin:0}p.svelte-xue1a1{font-size:2rem;margin:0;text-align:center}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1o0evpc_START -->${$$result.title = `<title>Error | AS93</title>`, ""}<meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes"><!-- HEAD_svelte-1o0evpc_END -->`, ""} <p class="svelte-xue1a1" data-svelte-h="svelte-1p48yl9">Oops, something’s gone a bit wrong here</p> <h1 class="svelte-xue1a1">${escape($page.status)}</h1> <p class="emoji svelte-xue1a1" data-svelte-h="svelte-14uudq">😢</p> ${$page?.error?.message ? `<p class="svelte-xue1a1">${escape($page.error.message)}</p>` : ``}`;
});
export {
  Error as default
};
