import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

// modules
import users from './users'
import global from './global'
import contact from './contact'
import actualites from './actualites'
import activities from './activities'
import auth from './auth'

Vue.use(Vuex)

const dataState = createPersistedState({
  paths: ['global', 'auth']
})

export default new Vuex.Store({
  modules: {
    users,
    global,
    contact,
    actualites,
    activities,
    auth,
  },
  plugins: [dataState]
})
