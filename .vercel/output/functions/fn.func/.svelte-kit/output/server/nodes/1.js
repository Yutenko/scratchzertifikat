

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5JRkBI5T.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.BexlovyG.js","_app/immutable/chunks/entry.D5J-TpRC.js"];
export const stylesheets = [];
export const fonts = [];
