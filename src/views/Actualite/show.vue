<template>
  <v-container mb-10>
    <GoBack />
    <v-row class="text-center">

      <v-col cols="12" align="center">
        <v-img :src="actualite.image" max-width="500" class="rounded-xl" />
      </v-col>

      <v-col cols="12" class="text-h4 font-weight-bold secondary--text mb-5 mt-5" v-text="actualite.title" />

      <v-col cols="8" class="gray-dark--text body-1 mb-15 mx-auto" v-text="actualite.description" />

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
