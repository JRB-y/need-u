<template>
  <v-card class="grey pa-10 rounded-xl" elevation="0">
    <div class="d-flex flex-column">
      <v-btn text class="primary ma-5" to="/login">Connexion</v-btn>
      <v-btn text class="secondary ma-5" to="/register">Inscription</v-btn>
    </div>
    
  </v-card>
</template>

<script>
// import LoginComponent from '@/views/Auth/Login'

export default {
  name: 'AuthComponent',
  // components: { LoginComponent },
}
</script>
