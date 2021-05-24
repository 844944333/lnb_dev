import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home'),
    meta: {
      title: 'lnb_dev'
    }
  },
  {
    path: '/home',
    component: () => import('@/views/HomePage')
  },
  {
    path: '/list',
    component: () => import('@/views/List')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
