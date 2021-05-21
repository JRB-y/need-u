export default {
  namespaced: true,
  state: {
    drawer: false,
    dark: false,
  },
  getters: {
    getDrawerValue: state => state.drawer,
    getDarkValue: state => state.dark,
  },
  mutations: {
    TOGGLE_DRAWER (state, value) {
      state.drawer = value
    },
    TOGGLE_DARK_MODE (state, value) {
      state.dark = value
    }
  }
}
