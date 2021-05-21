<template>
  <v-row>
    <v-col cols="12" md="6" align="center">
      <v-img
        :src="user.picture.large"
        :aspect-ratio="1"
        max-height="300"
        max-width="400"
        class="rounded-lg"
      />
    </v-col>
    <v-col sm="12" md="6" align="center">
      <h3 class="profile-name secondary--text text-h4 text-center">
        {{ fullName }}
      </h3>
      <p class="profile-description gray-dark--text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae similique
        expedita esse! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quae similique expedita esse!
      </p>
        <!-- Statistiques -->
        <v-row align="center" justify="center">
          <v-col cols="6">
            <span class="primary--text font-weight-bold text-h5 mr-2">13</span>
            <span class="gray-dark--text">Prestations</span>
          </v-col>
          <v-col cols="6">
            <span class="primary--text font-weight-bold text-h5 mr-2">03</span>
            <span class="gray-dark--text">Pouces orange</span>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="6">
            <span class="primary--text font-weight-bold text-h5 mr-2">09</span>
            <span class="gray-dark--text">Pouces bleu</span>
          </v-col>
          <v-col cols="6">
            <span class="primary--text font-weight-bold text-h5 mr-2">01</span>
            <span class="gray-dark--text">Pouces rouge</span>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-rating
            background-color="secondary"
            color="primary"
            large
          />
        </v-row>
      <!-- <div class="profile-footer"></div> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MiniProfileComponent',
  props: ['user'],
  computed: {
    fullName() {
      return this.user.name.first + ' ' + this.user.name.last
    }
  }
}
</script>
