<template>
  <v-container mb-10>
    <GoBack />
    <v-row class="text-center">
      <v-col cols="12" align="center">
        <v-img :src="actualite.image" max-width="500" class="rounded-xl" />
      </v-col>

      <v-col cols="12" class="mb-5">
        <h1 class="secondary--text">{{ actualite.title }}</h1>
      </v-col>

      <v-col cols="12" v-text="actualite.description" />
    </v-row>
  </v-container>
</template>

<script>
import GoBack from '@/components/GoBack'

export default {
  name: "ActualiteShow",
  components: { GoBack },
  computed: {
    actualite () {
      return this.$store.getters['actualites/getOne'](parseInt(this.$route.params.id))
    }
  }
}
</script>
