import axiosInstance from '@/config/axios'

export default {
  namespaced: true,
  state: {
    activities: [
      // {
      //   id: 0,
      //   title: 'ACTIVITÉS MANUELLES',
      //   image: require('@/assets/images/activities/activites-manuelles.webp'),
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui a temporibus nulla expedita sint beatae et molestiae eveniet, illum omnis, officia in quisquam quidem, sequi doloremque delectus incidunt ab!"
      // },
      // {
      //   id: 1,
      //   title: 'ACTIVITÉS SPORTIVES',
      //   image: require('@/assets/images/activities/activites-sport.webp'),
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui a temporibus nulla expedita sint beatae et molestiae eveniet, illum omnis, officia in quisquam quidem, sequi doloremque delectus incidunt ab!"
      // },
      // {
      //   id: 2,
      //   title: 'ACTIVITÉS CULTURELLES',
      //   image: require('@/assets/images/activities/activites-culturelles.webp'),
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui a temporibus nulla expedita sint beatae et molestiae eveniet, illum omnis, officia in quisquam quidem, sequi doloremque delectus incidunt ab!"
      // },
      // {
      //   id: 3,
      //   title: 'LOISIRS ET DETENTE',
      //   image: require('@/assets/images/activities/activites-loisir-detente.webp'),
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui a temporibus nulla expedita sint beatae et molestiae eveniet, illum omnis, officia in quisquam quidem, sequi doloremque delectus incidunt ab!"
      // },
    ],
    staticActivities: [
      {
        id: 0,
        title: 'ACTIVITÉS MANUELLES',
        image: require('@/assets/images/activities/activites-manuelles.webp'),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui a temporibus nulla expedita sint beatae et molestiae eveniet, illum omnis, officia in quisquam quidem, sequi doloremque delectus incidunt ab!"
      },
      {
        id: 1,
        title: 'ACTIVITÉS SPORTIVES',
        image: require('@/assets/images/activities/activites-sport.webp'),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui a temporibus nulla expedita sint beatae et molestiae eveniet, illum omnis, officia in quisquam quidem, sequi doloremque delectus incidunt ab!"
      },
      {
        id: 2,
        title: 'ACTIVITÉS CULTURELLES',
        image: require('@/assets/images/activities/activites-culturelles.webp'),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui a temporibus nulla expedita sint beatae et molestiae eveniet, illum omnis, officia in quisquam quidem, sequi doloremque delectus incidunt ab!"
      },
      {
        id: 3,
        title: 'LOISIRS ET DETENTE',
        image: require('@/assets/images/activities/activites-loisir-detente.webp'),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui a temporibus nulla expedita sint beatae et molestiae eveniet, illum omnis, officia in quisquam quidem, sequi doloremque delectus incidunt ab!"
      },
    ]
  },

  getters: {
    getActivities: state => state.activities,
    getOne: state => (id) => state.activities.find(el => el.id === id),
    getStaticActivities: state => state.staticActivities
  },
  mutations: {
    SET_ACTIVITIES (state, activities) {
      state.activities = activities
    }
  },
  actions: {
    async getAllActivities(context) {
      const { data } = await axiosInstance.get('activity')
      context.commit('SET_ACTIVITIES', data.data)
    }
  }
}
