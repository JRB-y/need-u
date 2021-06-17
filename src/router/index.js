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
    component: () => import(/* webpackChunkName: "register" */ '@/views/Auth/Register/Register'),
    meta: {
      guest: true
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Auth/Login'),
    meta: {
      guest: true
    },
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
    path: '/a-propos',
    name: 'apropos',
    component: () => import(/* webpackChunkName: "a-propos" */ '@/views/StaticViews/APropos')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard'),
    meta: {
      auth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "account" */ '@/views/Profile'),
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
  const { auth, guest } = to.meta
  
  const userIsLogged = store.getters['auth/isLogged']
  if (auth) {
    if (!userIsLogged) {
      // redirect to index
      next({ path: '/' })
    }
  }

  if (guest) {
    if (userIsLogged) {
      // redirect to index
      next({ path: '/profile' })
    }
  }

  next()
})

export default router
