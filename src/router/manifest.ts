import type { RouteRecordRaw  } from "vue-router";

const manifest: RouteRecordRaw[] = [{   
    path: '/',
    meta: { breadCrumb: 'Home' },
    children: [
      {
        name: 'dashboard',
        meta: { breadCrumb: 'Home' },
        path: '',
        component: () => import('../views/DashBoard.vue'),
      },
      {
        meta: { breadCrumb: 'Show' },
        name: 'show',
        path: 'shows/:showId',
        component: () => import('../views/ShowInfo.vue'),
        // Just to test the breadcrumbs nesting
        children: [
          {
            meta: { breadCrumb: 'Episode' },
            name: 'episode',
            path: 'episode/:episodeId',
            component: () => import('../views/ShowInfo.vue'),
          }
          
        ],
      },
      {
        path: 'search/:query',
        name: 'search',
        component: () => import('@/views/SearchResults.vue'),
        meta: { breadCrumb: 'Searching' },
      },
    ],
}, {
  path: '/about',
  meta: { breadCrumb: 'Test'},
  children: [
    {
      name: 'about',
      path: '/',
      component: () => import('../views/AboutView.vue'),

    }
  ],
}]

export default manifest;