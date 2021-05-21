export default {
  namespaced: true,

  state: {
    users: []
  },

  getters: {
    getAllUsers: (state) => state.users,
    getUsersEmail: (state) => state.users.map(el => el.email),
    getRandomUsers: (state) => {
      const shuffled = state.users.sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 5)
    }
  },

  actions: {
    async getUsers(context) {
      console.log('DISAPTCH USERs')
      const response = await fetch('https://randomuser.me/api/?results=50&inc=email,id,name,picture')
      const result = await response.json()
      context.commit('SET_USERS', result.results)
    }
  },

  mutations: {
    SET_USERS(state, users) {
      state.users = users
    }
  },
}