

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B5Ex__e_.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.BexlovyG.js"];
export const stylesheets = ["_app/immutable/assets/0.B2lhcEYX.css"];
export const fonts = [];
