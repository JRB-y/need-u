<template>
  <v-layout>
    <v-container pt-10 mb-10>
        <v-row class="text-center">
          <v-col cols="12" align="center">
            <v-img :src="activity.image" max-width="500" class="rounded-xl" />
          </v-col>

          <v-col cols="12" class="mb-5">
            <h1 class="secondary--text">{{ activity.title }}</h1>
          </v-col>

          <v-col cols="12" v-text="activity.description" />
        </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "ActualiteShow",
  computed: {
    activity () {
      return this.$store.getters['activities/getOne'](parseInt(this.$route.params.id))
    }
  }
}
</script>
