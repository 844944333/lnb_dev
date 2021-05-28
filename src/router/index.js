import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home'),
    meta: {
      title: 'ltb_dev'
    }
  },
  {
    path: '/home',
    component: () => import('@/views/HomePage')
  },
  {
    path: '/list',
    component: () => import('@/views/List')
  },
  {
    path: '/life',
    component: () => import('@/views/Life')
  },
  {
    path: '/about',
    component: () => import('@/views/About')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
