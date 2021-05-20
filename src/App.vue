<template>
  <v-app id="inspire">

    <Drawer />

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  import Drawer from '@/components/Drawer'

  export default {
    name: 'Application',
    components: { Drawer },
  }
</script>