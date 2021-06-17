<template>
  <v-layout class="grey">
    <v-container class="pa-10 mt-15 mb-15 grey rounded-xl">
      <v-row class="">
        <v-col sm="12" md="6" v-for="activity in activities" :key="activity.id" align="center">
          <v-img :src="activity.image" class="rounded-xl d-flex align-center" align="center" max-width="450">
            <v-btn class="imageBtn secondary" large elevation="5" small :to="`/activite/${activity.id}`">{{ activity.title }}</v-btn>
          </v-img>
        </v-col>

        <v-col class="mt-10 mx-auto rounded-xl text-center">
          <v-btn class="primary font-weight-bold">VOIR PLUS</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'HomeActivities',
  computed: {
    activities () {
      return this.$store.getters['activities/getStaticActivities']
    }
  }
};
</script>
