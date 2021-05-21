import Vue from 'vue'
import Vuex from 'vuex'

import global from './global'
import activities from './activities'
import users from './users'
import contact from './contact'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    activities,
    users,
    contact
  }
})
