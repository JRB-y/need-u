<template>
  <v-container>
    <div class="text-center mb-5" style="margin-top: -48px">
      <div class="text-h5 font-wight-bold primary--text radius-sm px-2" style="display: inline-block; background: whitesmoke;">
        {{ NEEDE.toUpperCase() }}
      </div>
    </div>
    <v-row justify="center">
      <v-icon size="160" class="third--text">mdi-account-circle</v-icon>
    </v-row>

    <v-row>
      <v-col cols="12" class="ma-0">
        <v-text-field
          label="NOM"
          placeholder="Ex: Toto"
          required
          filled
          rounded
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="PRENOM"
          placeholder="Ex: NOlan"
          required
          filled
          rounded
        />
      </v-col>
      <v-col sm="12" >
        <v-text-field
          :label="`âge`.toUpperCase()"
          placeholder="Ex: Toto"
          required
          filled
          rounded
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-radio-group
        row
      >
        <v-radio
          label="Homme"
          value="h"
        />
        <v-radio
          label="Femme"
          value="f"
        />
        <v-radio
          label="Autre"
          value="a"
        />
      </v-radio-group>
    </v-row>


    <v-row>
      <v-col>
        <v-text-field
          label="EMAIL"
          placeholder="Ex: clara.baill@gmail.com"
          required
          filled
          rounded
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          label="VILLE"
          placeholder="Ex: clara.baill@gmail.com"
          required
          filled
          rounded
        />
      </v-col>

      <v-col>
        <v-text-field
          label="CODE POSTAL"
          placeholder="Ex: clara.baill@gmail.com"
          required
          filled
          rounded
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-textarea
          :label="`votre présentation`.toUpperCase()"
          filled
          value=""
          rounded
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          :label="`prix demandé par heure`.toUpperCase()"
          placeholder="Moyenne 20€"
          required
          filled
          rounded
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          type="password"
          :label="`mot de passe`.toUpperCase()"
          placeholder="Ex: **********"
          required
          filled
          rounded
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          type="password"
          :label="`confirmation mot de passe`.toUpperCase()"
          placeholder="Ex: **********"
          required
          filled
          rounded
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          :label="`centre d'intérêt`.toUpperCase()"
          placeholder="Ex: Foot"
          required
          filled
          rounded
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center">
        <div class="submit-button primary">
          <v-icon size="60">mdi-check</v-icon>
        </div>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import vars from '@/config/vars'

export default {
  name: 'RegisterNeede',
  data () {
    return {
      NEEDE: vars.NEEDE,
    }
  },
}
</script>

<style scoped>
.v-input >>> .v-text-field__details {
  display: none;
}

.submit-button {
  width: 200px;
  border-radius: 15px;
}
.submit-button:hover {
  cursor: pointer;
  opacity: 0.9;
}
</style>