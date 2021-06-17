import axiosInstance from '@/config/axios'

export default {
  namespaced: true,

  state: {
    token: null,
    isLogged: false,
    currentUser: null,
  },

  getters: {
    isLogged: state => state.isLogged,
    getToken: state => state.token,
    getCurrentUser: state => state.currentUser,
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
      state.isLogged = true
    },
    SET_USER(state, user) {
      state.currentUser = user
    },
    REMOVE_TOKEN (state) {
      state.token = null
      state.isLogged = false
      state.userLoggedIn = null
    }
  },

  actions: {
    async register(context, user) {
      const response = await axiosInstance.post('auth/register', user)
      return response
    },

    async login (context, user) {
      const response = await axiosInstance.post('auth/login', user)
      if (response.success === false) {
        throw new Error(response.reason)
      }
      console.log('LOGIN', response)
      context.commit('SET_TOKEN', response.data.token)
      context.commit('SET_USER', response.data.user)
    },

    async me (context, id) {
      const response = await axiosInstance.get(`auth/me/${id}`)
      console.log('response', response)
      if (response.success) {
        context.commit('SET_USER', response.data)
      }
      return response
    }
  }
}
