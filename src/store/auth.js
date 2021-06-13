export default {
  namespaced: true,

  state: {
    token: null,
    isLogged: false,
  },

  getters: {
    isLogged: state => state.isLogged,
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
      state.isLogged = true
    },
    REMOVE_TOKEN (state) {
      state.token = null
      state.isLogged = false
    }
  },

  actions: {
    async login (context, user) {
      const { email, password } = user
      if (email === 'wajih@gmail.com' && password === '12345678') {
        const token = 'abcabcabctoken'
        context.commit('SET_TOKEN', token)
        return { success: true, data: token }
      } else {
        return { success: false, reason: 'Invalid credentials' }
      }
    }
  }
}
