<template>
  <div class="home">
    <!--
      Carousel de la page home
      On passe la liste des users dans le composant grace à la props 'users'
    -->
    <HomeBanner :users="users"/>

    <!--
      Partie c'est quoi need U
      Ce composant il est static (n'a pas besoin de props)
    -->

      <HomeCkoi />

      <!--
        Home activities 
        Normalement on passe aussi les activites a partir d'une api
      -->
      <HomeActivities />

      <!--
        Home Randome Profile
        List de 5 random users depuis la liste des users
      -->
      <HomeRandomUsers />
  </div>
</template>

<script>
import HomeCkoi from '@/views/Home/HomeCkoi'
import HomeBanner from '@/views/Home/HomeBanner'
import HomeActivities from '@/views/Home/HomeActivities'
import HomeRandomUsers from '@/views/Home/HomeRandomUsers'

export default {
  name: 'Home',
  components: { HomeBanner, HomeCkoi, HomeActivities, HomeRandomUsers },
  computed: {
    users () {
      return this.$store.getters['users/getAllUsers']
    }
  },
  async mounted () {
    // When home component is mounted we dispatch the getUsers
    // actions to get list of users from an API
    try {
      await this.$store.dispatch('users/getUsers')
    } catch (error) {
      console.error(error)
    }
    
  }
}
</script>
