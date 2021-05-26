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
  {
    path: '/register/:where?',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Auth/Register/Register')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '@/views/StaticViews/Faq')
  },
  {
    path: '/mentions-legales',
    name: 'mentionsLegales',
    component: () => import(/* webpackChunkName: "mentions-legales" */ '@/views/StaticViews/MentionsLegales')
  },
  {
    path: '/politique-confidentialite',
    name: 'politiqueConfidentialite',
    component: () => import(/* webpackChunkName: "politique-confidentialite" */ '@/views/StaticViews/PolitiqueConfidentialite')
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
