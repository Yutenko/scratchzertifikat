export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Zertifikat.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BqoRZIBx.js","app":"_app/immutable/entry/app.1ac6MZhr.js","imports":["_app/immutable/entry/start.BqoRZIBx.js","_app/immutable/chunks/entry.D5J-TpRC.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.1ac6MZhr.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.BexlovyG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();