import type { RouteRecordRaw } from 'vue-router';

const manifest: RouteRecordRaw[] = [
  {
    path: '/',
    meta: { breadCrumb: 'Home' },
    children: [
      {
        name: 'dashboard',
        meta: { breadCrumb: 'Home' },
        path: '',
        component: () => import('../views/DashBoard.vue')
      },
      {
        meta: { breadCrumb: 'Show' },
        name: 'show',
        path: 'shows',
        children: [
          {
            meta: { breadCrumb: 'Show' },
            name: 'show',
            path: ':showId',
            component: () => import('../views/ShowInfo.vue')
          }
        ]
      },
      {
        path: 'search/:query',
        name: 'search',
        component: () => import('@/views/SearchResults.vue'),
        meta: { breadCrumb: 'Searching' }
      }
    ]
  }
];

export default manifest;
