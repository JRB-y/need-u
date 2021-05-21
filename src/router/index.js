import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/actualite',
    name: 'actualite',
    component: () => import(/* webpackChunkName: "actualite" */ '@/views/Actualite')
  },
  {
    path: '/actualite/:id',
    name: 'actualiteShow',
    component: () => import(/* webpackChunkName: "actualite-show" */ '@/views/Actualite/show')
  },
  {
    path: '/activite/:id',
    name: 'activiteShow',
    component: () => import(/* webpackChunkName: "activiy-show" */ '@/views/Activity/show')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact')
  },
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
