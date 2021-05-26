export default {
  namespaced: true,

  state: {
    contactMessage: null,
    messageSended: false,
  },

  getters: {
    getMessageSended: (state) => state.messageSended
  },

  actions: {
    async sendMessage (context, contactMessage) {
      // TODO: save in API
      context.commit('SET_MESSAGE', contactMessage)
      return { success: true }
    }
  },

  mutations: {
    SET_MESSAGE(state, msg) {
      state.contactMessage = msg
      state.messageSended = true
    }
  }

}
