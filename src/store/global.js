export default {
  namespaced: true,
  state: {
    drawer: false,
    dark: false,
    snackbar: {
      show: false,
      text: null,
      type: ''
    },
  },
  getters: {
    getDrawerValue: state => state.drawer,
    getDarkValue: state => state.dark,
    getSnackbar: state => state.snackbar,
  },
  mutations: {
    TOGGLE_DRAWER (state, value) {
      state.drawer = value
    },
    TOGGLE_DARK_MODE (state, value) {
      state.dark = value
    },
    SHOW_SNACKBAR (state, snackbar) {
      state.snackbar.show = true
      state.snackbar.text = snackbar.text
      state.snackbar.color = snackbar.color
    }
  },
}
