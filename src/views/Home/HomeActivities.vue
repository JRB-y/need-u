<template>
  <v-layout class="py-5 grey">
    <v-container>
      <v-row class="pb-5 pt-5">

        <v-col sm="12" md="6" v-for="activity in activities" :key="activity.id" align="center">
          <v-img :src="activity.image" class="rounded-xl d-flex align-center" align="center" max-width="450">
            <v-btn class="imageBtn primary" large elevation="5" small :to="`/activite/${activity.id}`">{{ activity.title }}</v-btn>
          </v-img>
        </v-col>

        <v-col  class="mx-auto rounded-xl text-center">
          <v-btn class="secondary font-weight-bold">VOIR PLUS</v-btn>
        </v-col>

      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'HomeActivities',
  mounted () {
    console.log('AMOUUU')
  },
  computed: {
    activities () {
      return this.$store.getters['activities/getActivities']
    }
  }
};
</script>
