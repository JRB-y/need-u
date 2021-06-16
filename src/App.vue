<template>
  <v-app id="need-u-app" :style="{ backgroundColor: $vuetify.theme.dark ? '' : '#f3f3f3' }">

    <Drawer />

    <Navbar />

    <v-main>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </v-main>

    <Footer />

    <v-snackbar
      v-model="snackbar.show"
      timeout="8000"
      :color="snackbar.type === 'error' ? 'secondary' : 'primary'"
      :top="true"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'ApplicationLayout',
  components: { Drawer, Navbar, Footer },
  mounted () {
    // App.vue est le composant parent donc il se mount 1 fois quand on refresh la page
    // Au premier refresh je récupere la valeur du dark depuis le store et je l'affect a vuetify
    this.$vuetify.theme.dark = this.$store.getters['global/getDarkValue']
  },
  computed: {
    snackbar () {
      return this.$store.getters['global/getSnackbar']
    }
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
