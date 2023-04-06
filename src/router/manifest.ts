export default [{   
  path: '/',
    meta: { breadCrumb: 'Home' },
    children: [
      {
        name: 'dashboard',
        path: '',
        component: () => import('../views/DashBoard.vue'),
      },
      {
        meta: { breadCrumb: 'Show' },
        name: 'show',
        path: 'shows/:id',
        component: () => import('../views/ShowInfo.vue'),
      },
      {
        path: '/search/:query',
        name: 'search',
        component: () => import('@/views/SearchResults.vue'),
        meta: { breadCrumb: 'Searching' },
      },
    ],
}]