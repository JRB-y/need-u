<template>
  <v-card class="grey pa-10 rounded-xl" elevation="0">
    <LoginComponent />
  </v-card>
</template>

<script>
import LoginComponent from '@/views/Auth/Login'

export default {
  name: 'AuthComponent',
  components: { LoginComponent },
}
</script>
