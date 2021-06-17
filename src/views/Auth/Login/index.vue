<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="6" class="offset-md-3 mt-15">
        <div class="text-center">
          <h3 class="text-h5 font-weight-bold secondary--text mb-5">Connexion</h3>
            <v-text-field
              v-model="user.email"
              placeholder="Email"
              required
              filled
              rounded
            />

            <v-text-field
              v-model="user.password"
              placeholder="Mot de passe"
              required
              filled
              rounded
              type="password"
              autocomplete="new-password"
            />

            <v-btn rounded block class="primary" @click="login">
              <v-icon size="60" large>mdi-check</v-icon>
            </v-btn>

            <v-divider class="my-5 mt-15"/>
            <v-row>
              <v-col sm="12" md="6" class="offset-md-3">
                <div class="d-flex flex-column text-center">
                  <span text>Vous n'avez pas un compte ?</span>
                  <v-btn text class="secondary" to="/register">Inscription</v-btn>
                </div>
              </v-col>
            </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginComponent',
  data () {
    return {
      user: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('auth/login', this.user)
        this.$router.push('/profile')
      } catch (error) {
        this.$store.commit('global/SHOW_SNACKBAR', { show: true, type: "error", text: error.response.data.reason })
      }
    }
  }
}
</script>
