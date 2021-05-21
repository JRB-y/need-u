import Vue from 'vue'
import Vuex from 'vuex'

import global from './global'
import activities from './activities'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    activities,
    users
  }
})
