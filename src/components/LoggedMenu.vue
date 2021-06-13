<template>
  <v-card class="grey" elevation="0">
    <v-list>
      <v-list-item link>
        <v-list-item-title v-text="'Profil'" />
      </v-list-item>
      <v-list-item link @click="logout">
        <v-list-item-title v-text="'Déconnexion'" />
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'LoggedMenu',
  methods: {
    logout () {
      this.$store.commit('auth/REMOVE_TOKEN')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>