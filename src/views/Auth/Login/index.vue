<template>
  <div class="text-center">
    <h3 class="text-h5 font-weight-bold secondary--text mb-5">Login Component</h3>
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
      />


      <v-btn rounded block class="primary" @click="login">
        <v-icon size="60" large>mdi-check</v-icon>
      </v-btn>

      <v-divider class="my-5"/>
      <div class="d-flex">
        <v-btn text>Mot de passe oublie ?</v-btn>
        <v-btn text class="primary" to="/register">Inscrivez-vous</v-btn>
      </div>
  </div>
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
      const loginResponse = await this.$store.dispatch('auth/login', this.user)
      if (!loginResponse.success) {
        this.$store.commit('global/SHOW_SNACKBAR', { show: true, color: 'red', text: `Erreur d'authentification` })
      } else {
        this.$router.push('/dashboard')
        // redirection !!!!!
      }
      
    }
  }
}
</script>
