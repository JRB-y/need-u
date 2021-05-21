<template>
  <v-app id="inspire">

    <Drawer />

    <Navbar />

    <v-main>
      <router-view/>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { name, shortDescription } from '@/config/application.json'

export default {
  name: 'ApplicationLayout',
  components: { Drawer, Navbar, Footer },
  data: () => ({
    appTitle: name,
    appDescription: shortDescription
  }),
  mounted () {
    // App.vue est le composant parent donc il se mount 1 fois quand on refresh la page
    // Au premier refresh je récupere la valeur du dark depuis le store et je l'affect a vuetify
    console.log(this.$store.getters['global/getDarkValue'])
    this.$vuetify.theme.dark = this.$store.getters['global/getDarkValue']
  }
}
</script>
