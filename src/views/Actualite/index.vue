<template>

  <v-container>
    <GoBack />

    <v-col class="text-center d-flex justify-center">
      <v-img
        src="@/assets/images/actualites/bg-actualite.webp"
        class="rounded-xl d-flex align-center"
        align="center"
        max-width="250"
        style="margin-top: -50px;"
      >
        <h1 class="secondary--text">Nos actus</h1>
      </v-img>
    </v-col>

    <v-container class="grey rounded-xl" style="margin-top: -15px;">
      <v-row>
        <v-col
          sm="12"
          md="6"
          v-for="actualite in actualites"
          :key="actualite.id"
          align="center"
          :class="{ 'pa-15': !$vuetify.breakpoint.mobile }"
        >
          <v-img
            :src="actualite.image"
            class="rounded-xl d-flex align-center"
            align="center"
          >
            <v-overlay
              :absolute="true"
              :opacity="0.3"
              :value="overlay"
              style=""
            >
              <router-link :to="`/actualite/${actualite.id}`">
                  <span class="white--text text-h5">{{ actualite.title }}</span>
              </router-link>
            </v-overlay>
          </v-img>
        </v-col>
      </v-row>

    </v-container>

  </v-container>

</template>
<script>
import GoBack from '@/components/GoBack'

export default {
  name: 'Actualites',
  components: { GoBack },
  computed: {
    actualites () {
      return this.$store.getters['actualites/getActualites']
    }
  },
  data: () => ({
    overlay: true,
  }),
  methods: {
    mouseOver () {
      console.log('HOVER')
    }
  }
};
</script>
<style scoped>
.v-application .secondary--text {
  color: #466f6e !important;
  caret-color: #466f6e !important;
  font-size: 45px;
}
.v-application a {
  color: transparent;
}
</style>