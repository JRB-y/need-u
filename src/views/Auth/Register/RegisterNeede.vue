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
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" class="ma-0">
          <v-text-field
            label="NOM"
            placeholder="Ex: Toto"
            required
            filled
            rounded
            v-model="user.firstname"
            :rules="[(v) => !!v || 'Le nom est requis']"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="PRENOM"
            placeholder="Ex: NOlan"
            required
            filled
            rounded
            v-model="user.lastname"
            :rules="[(v) => !!v || 'Le nom est requis']"
          />
        </v-col>
        <v-col sm="12" >
          <v-text-field
            :label="`âge`.toUpperCase()"
            placeholder="Ex: Toto"
            required
            filled
            rounded
            v-model="user.age"
            :rules="[(v) => !!v || 'Item is required']"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-radio-group
          row
          v-model="user.gender"
          :rules="[(v) => !!v || 'Le nom est requis']"
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
            v-model="user.email"
            :rules="[(v) => !!v || 'Le nom est requis']"
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
            v-model="user.city"
            :rules="[(v) => !!v || 'Le nom est requis']"
          />
        </v-col>

        <v-col>
          <v-text-field
            label="CODE POSTAL"
            placeholder="Ex: clara.baill@gmail.com"
            required
            filled
            rounded
            v-model="user.zip"
            :rules="[(v) => !!v || 'Le nom est requis']"
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
            v-model="user.presentation"
            :rules="[(v) => !!v || 'Le nom est requis']"
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
            v-model="user.price_hour"
            :rules="[(v) => !!v || 'Le nom est requis']"
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
            v-model="user.password"
            :rules="[(v) => !!v || 'Le nom est requis']"
            autocomplete="new-password"
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
            v-model="user.password_confirmation"
            :rules="[(v) => !!v || 'Le nom est requis']"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            v-model="user.activities"
            :items="allActivities"
            :rules="[(v) => !!v || 'Item is required']"
            :label="`centre d'intérêt`.toUpperCase()"
            required
            filled
            rounded
            multiple
            chips
            item-text="title"
            item-value="id"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col align="center">
          <v-btn
            :class="{ disabled: !valid }"
            color="secondary"
            dark
            class="mr-4 mt-3"
            @click="save"
            rounded
          >
            ENVOYER
          </v-btn>
          <!-- <div class="submit-button primary" @click="save">
            <v-icon size="60">mdi-check</v-icon>
          </div> -->
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import vars from '@/config/vars'

export default {
  name: 'RegisterNeede',
  async mounted () {
    await this.$store.dispatch('activities/getAllActivities')
  },
  computed: {
    allActivities () {
      return this.$store.getters['activities/getActivities']
    }
  },
  data () {
    return {
      NEEDE: vars.NEEDE,
      user: {
        firstname: null,
        lastname: null,
        age: null,
        gender: null,
        email: null,
        password: null,
        city: null,
        zip: null,
        presentation: null,
        price_hour: null,
        activities: []
      },
      valid: false
    }
  },
  methods: {
    async save () {
      if (!this.$refs.form.validate()) return
      try {
        this.user.role_id = 1
        await this.$store.dispatch('auth/register', this.user)
        const snackbar = {
          text: 'Inscription avec success',
          color: 'green',
        }
        this.$store.commit('global/SHOW_SNACKBAR', snackbar)
        // this.$router.push('/')
      } catch (error) {
        const snackbar = {
          text: error.response.data.reason,
          color: 'red',
        }
        this.$store.commit('global/SHOW_SNACKBAR', snackbar)
      }
      
    }
  }
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