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
  })
}
</script>
