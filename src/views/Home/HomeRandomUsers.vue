<template>
  <v-layout class="py-15">
    <v-container>
      <v-carousel
        :hide-delimiter-background="true"
        :hide-delimiters="true"
        :show-arrows="true"
        :show-arrows-on-hover="true"
        height="100%"
      >
        <!-- cycle -->
        <v-carousel-item v-for="(user, i) in randomeUsers" :key="i" style="height: 100%">

          <!--
            Ce composant est dans le dossier /components
            pourquoi ? peut être qu'on pourra le reutiliser
          -->
          <MiniProfile :user="user" />

        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-layout>
</template>

<script>
import MiniProfile from '@/components/Profile/MiniProfile'

export default {
  name: 'HomeRandomUsers',
  components: { MiniProfile },
  computed: {
    randomeUsers () {
      return this.$store.getters['users/getRandomUsers']
    }
  }
}
</script>
