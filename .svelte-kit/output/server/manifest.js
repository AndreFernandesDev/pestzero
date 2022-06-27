export const manifest = {
	appDir: "_app",
	assets: new Set(["app.css","images/call.svg","images/favicon.png","images/logo.png"]),
	mimeTypes: {".css":"text/css",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"start-c368f388.js","js":["start-c368f388.js","chunks/index-7329c391.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
