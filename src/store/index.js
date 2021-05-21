import Vue from 'vue'
import Vuex from 'vuex'

import users from './users'
import global from './global'
import contact from './contact'
import actualites from './actualites'
import activities from './activities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    global,
    contact,
    actualites,
    activities,
  }
})
