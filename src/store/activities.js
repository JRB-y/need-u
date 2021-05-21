export default {
  namespaced: true,
  state: {
    activities: [
      {
        id: 0,
        title: 'ACTIVITÉS MANUELLES',
        image: require('@/assets/images/activities/activites-manuelles.webp'),
      },
      {
        id: 1,
        title: 'ACTIVITÉS SPORTIVES',
        image: require('@/assets/images/activities/activites-sport.webp'),
      },
      {
        id: 2,
        title: 'ACTIVITÉS CULTURELLES',
        image: require('@/assets/images/activities/activites-culturelles.webp'),
      },
      {
        id: 3,
        title: 'LOISIRS ET DETENTE',
        image: require('@/assets/images/activities/activites-loisir-detente.webp'),
      },
    ]
  },

  getters: {
    getActivities: state => state.activities
  },

}
