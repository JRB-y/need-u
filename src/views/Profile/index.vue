<template>
  <v-container class="mb-15">
    <GoBack style="shrink"/>

    <!-- TITLE -->
    <v-row class="text-center" justify="center" align="center">
      
      <v-col cols="3" v-text="'MON COMPTE'" class="text-center inscription-title secondary--text font-weight-bold text-h5"/>
      <v-spacer />
    </v-row>

    <!-- INFO -->
    <v-row class="mt-5">

      <v-col sm="12" md="3" style="background: #5c5f6e;" class="rounded-xl mt-5 ml-5">

        <v-list color="#5c5f6e" class="text-center">
          <v-list-item-group>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="white--text text-h5" :to="{ name: 'profile' }">Mon Profil</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="primary--text text-body">Messagerie</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="primary--text text-body">Mes Favoris</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="primary--text text-body">Mon recap</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="primary--text text-body">Mode de paiement</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-item-group>
        </v-list>

      </v-col>

      <v-col sm="12" md="8" class="ml-5">
        <v-row>
          <v-col class="shrink">
            <v-icon size="160" class="third--text">mdi-account-circle</v-icon>
          </v-col>
          <v-col class="mt-5">
            <h3 class="primary--text font-weight-bold text-h4" v-text="`${currentUser.firstname} ${currentUser.lastname}`" />
            <div class="secondary-text--text text-body font-weight-bold">{{ currentUser.gender === 'h' ? 'Homme' : 'Femme' }}</div>
            <div class="secondary-text--text text-h5 font-weight-bold">{{ currentUser.age }} ans</div>
            <div class="secondary-text--text text-h5 font-weight-bold">{{ currentUser.addr }}</div>
            <p class="text-body mt-5 pa-5 grey secondary-text--text rounded-xl">
              <span class="d-block text-h6 secondary--text">Votre présentation</span>
              {{ currentUser.presentation }}
            </p>
          </v-col>

        </v-row>

        <v-container>
          <v-select
            v-model="currentUser.activities"
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
        </v-container>

      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import GoBack from '@/components/GoBack'
export default {
  name: 'Account',
  components: { GoBack },
  async mounted () {
    await this.$store.dispatch('auth/me')
    await this.$store.dispatch('activities/getAllActivities')
  },
  computed: {
    currentUser () {
      return this.$store.getters['auth/getCurrentUser']
    },
    allActivities () {
      return this.$store.getters['activities/getActivities']
    },
    user () {
      return this.$store.getters['auth/getMe'](this.currentUser.id)
    }
  }
}
</script>
