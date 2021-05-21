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

    <v-container class="pt-0 grey rounded-xl" style="margin-top: -15px;">
      <div class="mb-5 d-flex align-center">
        <div
          class="mr-5 px-5 py-1 ml-5 secondary--text text-h6 tab"
          :class="{'active-tab': tab === 1}"
          @click="changeTab(1)"
        >
          Actus
        </div>
        <div
          class="mr-5 px-5 py-1 secondary--text text-h6 tab"
          :class="{'active-tab': tab === 2}"
          @click="changeTab(2)"
        >
          Témoignages
        </div>
      </div>

      <v-row v-if="tab === 1">
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

      <v-row v-if="tab === 2" class="ma-15">
        <v-col class="text-center">
          <p class="body-1 primary--text">
            Pas de témoignages 
          </p>
          <p class="body-2 primary--text">
            Lorem ipsum, dolor sit amet 😞
          </p>
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
    tab: 1,
  }),
  methods: {
    mouseOver () {
      console.log('HOVER')
    },
    changeTab (value) {
      this.tab = value
    },
  },
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
.tab {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.tab:hover {
  color: white !important;
  background-color: #466f6e;
  cursor: pointer;
}
.active-tab {
  background-color: #9ca0a9;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>