<template>
  <v-container class="mt-15 mb-15 py-10">
    <v-row class="d-flex" align="center">
      <v-col sm="12" md="6" align="center">
        <v-container>
          <v-row>
            <v-col>
              <h2 class="secondary-text--text">Le principe est simple...</h2>
              <h3 class="secondary-text--text">Deux profils: </h3>
            </v-col>
          </v-row>

          <v-row>
            <v-col sm="4">
              <h2 class="secondary--text">{{ NEEDEUR.toUpperCase() }}</h2>
              <p class="secondary-text--text" :class="{ 'text-right': !$vuetify.breakpoint.smOnly }">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Sed, esse ab quis sequi dolorem
              </p>
            </v-col>
            <v-col sm="4" >
              <v-img src="@/assets/images/apropos/c-quoi.webp" style="height: 200px" contain/>
            </v-col>
            <v-col sm="4">
              <h2 class="primary--text">{{ NEEDE.toUpperCase() }}</h2>
              <p class="secondary-text--text" :class="{ 'text-left': !$vuetify.breakpoint.smOnly }">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Sed, esse ab quis sequi dolorem
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="secondary-text--text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum voluptates consectetur tempora
            </v-col>
          </v-row>
        </v-container>
        <v-row class="text-left" style="float: right;">
          <v-btn
            class="font-weight-bold mr-5 mt-2"
            color="primary"
          >
            cliquer ici
          </v-btn>
        </v-row>
      </v-col>

      <v-col sm="12" md="6" align="center">
        <v-img
          contain
          max-height="300"
          max-width="400"
          src="../../assets/images/quoi.webp"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vars from '@/config/vars'

export default {
  name: 'HomeCKoi',
  data () {
    return {
      NEEDEUR: vars.NEEDEUR,
      NEEDE: vars.NEEDE
    }
  }
}
</script>
