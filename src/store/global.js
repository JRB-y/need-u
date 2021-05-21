export default {
  namespaced: true,
  state: {
    drawer: false
  },
  getters: {
    getDrawerValue: state => state.drawer 
  },
  mutations: {
    TOGGLE_DRAWER (state, value) {
      console.log('MUTATION', value)
      state.drawer = value
    }
  }
}
