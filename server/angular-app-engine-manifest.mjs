
export default {
  basePath: '/Health_Tracker_Assignment',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
