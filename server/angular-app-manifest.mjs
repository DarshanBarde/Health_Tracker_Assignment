
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Health_Tracker_Assignment/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Health_Tracker_Assignment/add-user-workout",
    "route": "/Health_Tracker_Assignment"
  },
  {
    "renderMode": 2,
    "route": "/Health_Tracker_Assignment/add-user-workout"
  },
  {
    "renderMode": 2,
    "route": "/Health_Tracker_Assignment/user-workouts"
  },
  {
    "renderMode": 2,
    "route": "/Health_Tracker_Assignment/chartwise-rep"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5737, hash: '87d4e1e86264903c17b6d511bdb2fed3777eeb925a282a4199930190cbe29932', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: '826d995a56b93de5724eb5344e2658d7e46c846df859547f54592e25f3808253', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'add-user-workout/index.html': {size: 20626, hash: '284e9a7cdb5895e02986757b93503b4fa12ad6198ba74d9382f76de93abe17db', text: () => import('./assets-chunks/add-user-workout_index_html.mjs').then(m => m.default)},
    'user-workouts/index.html': {size: 13497, hash: 'f9750a342fb22674858a999895fb3f22bc125e0d9262cb5ff45a9b8cf102b8d7', text: () => import('./assets-chunks/user-workouts_index_html.mjs').then(m => m.default)},
    'chartwise-rep/index.html': {size: 9585, hash: '92ec44598a81d1fe2a6a1e5583e320bf80b9f9a3cf06de958e0f43a2aee1b482', text: () => import('./assets-chunks/chartwise-rep_index_html.mjs').then(m => m.default)},
    'styles-CO52A5DN.css': {size: 250102, hash: 'sPNwrlnwnw8', text: () => import('./assets-chunks/styles-CO52A5DN_css.mjs').then(m => m.default)}
  },
};
