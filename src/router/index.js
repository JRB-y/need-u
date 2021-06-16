import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Auth/Login')
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
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard'),
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { auth } = to.meta
  
  if (auth) {
    const userIsLogged = store.getters['auth/isLogged']
    if (!userIsLogged) {
      // redirect to index
      next({ path: '/' })
    }

  }

  next()
})

export default router
