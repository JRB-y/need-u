<template>
  <v-container >
    <h1 class="secondary--text text-center mt-3 mb-3">QUI SOMMES NOUS?</h1>
    <v-row class="text-center">
      <v-img src="@/assets/images/apropos/apropos.webp" height="800" contain> </v-img>
    </v-row>

    <v-row class="d-flex" align="center">
      <v-col sm="12" md="12" align="center">
        <v-container>
          <v-row>
            <v-col>
              <h2 class="secondary-text--text">Le principe est simple...</h2>
              <h3 class="secondary-text--text">Deux profils: </h3>
            </v-col>
          </v-row>

          <v-row  align="center" justify="center"> 
            <v-col sm="4">
              <h2 class="secondary--text">{{ NEEDEUR.toUpperCase() }}</h2>
              <p class="text-right secondary-text--text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Sed, esse ab quis sequi dolorem
              </p>
            </v-col>
            <v-col sm="4">
              <!-- TODO: relace image -->
              <v-img src="@/assets/images/apropos/c-quoi.webp"/>
            </v-col>
            <v-col sm="4">
              <h2 class="primary--text">{{ NEEDE.toUpperCase() }}</h2>
              <p class="text-left secondary-text--text">
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
    </v-row>
 

  </v-container>
</template>

<script>
import vars from "@/config/vars";

export default {
  name: "APropos",
  data() {
    return {
      NEEDEUR: vars.NEEDEUR,
      NEEDE: vars.NEEDE,
    };
  },
};
</script>