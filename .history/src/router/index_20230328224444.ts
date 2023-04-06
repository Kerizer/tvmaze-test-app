import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HomeView,
      meta: { breadCrumb: 'Dashboard' },
      children: [
        {
          meta: { breadCrumb: 'Dashboard' },
          name: 'dashboard',
          path: '',
          component: () => import('../views/DashBoard.vue')
        },
        {
          meta: { breadCrumb: 'Show' },
          name: 'show',
          path: 'shows/:id',
          component: () => import('../views/ShowInfo.vue')
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router