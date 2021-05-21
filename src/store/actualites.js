export default {
  namespaced: true,
  state: {
    actualites: [
      {
        id: 0,
        image: require('@/assets/images/actualites/actu-1.webp'),
        title: "1 astuces pour combattre la solitude chez les étudiants",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam id dolorum optio sequi! Ab sunt nihil, maxime cupiditate quaerat reprehenderit natus reiciendis alias quibusdam fugiat! Sequi dicta officiis doloremque modi magni vitae voluptate'
      },
      {
        id: 1,
        image: require('@/assets/images/actualites/actu-2.webp'),
        title: "2 astuces pour combattre la solitude chez les étudiants",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam id dolorum optio sequi! Ab sunt nihil, maxime cupiditate quaerat reprehenderit natus reiciendis alias quibusdam fugiat! Sequi dicta officiis doloremque modi magni vitae voluptate'
      },
      {
        id: 2,
        image: require('@/assets/images/actualites/actu-3.webp'),
        title: "3 astuces pour combattre la solitude chez les étudiants",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam id dolorum optio sequi! Ab sunt nihil, maxime cupiditate quaerat reprehenderit natus reiciendis alias quibusdam fugiat! Sequi dicta officiis doloremque modi magni vitae voluptate'
      },
      {
        id: 3,
        image: require('@/assets/images/actualites/actu-4.webp'),
        title: "4 astuces pour combattre la solitude chez les étudiants",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam id dolorum optio sequi! Ab sunt nihil, maxime cupiditate quaerat reprehenderit natus reiciendis alias quibusdam fugiat! Sequi dicta officiis doloremque modi magni vitae voluptate'
      },
    ]
  },

  getters: {
    getActualites: state => state.actualites,
    getOne (state) {
      return (id) => {
        return state.actualites.find(el => el.id === id)
      }
    }
  },

}
