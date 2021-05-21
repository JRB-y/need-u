<template>
  <v-app-bar app class="primary">

    <v-app-bar-nav-icon
      class="white--text"
      v-if="$vuetify.breakpoint.mobile"
      @click="toggleDrawer"
    />

    <v-toolbar-title class="mr-5">
      <router-link to="/" tag="span" style="cursor: pointer" class="white--text">
        {{ appTitle }}
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items v-if="!$vuetify.breakpoint.mobile">
      <v-menu
        offset-y
        v-for="(item, i) in menuItems"
        :key="i"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-bind="attrs"
            v-on="on"
            class="white--text"
            :to="!item.children ? item.path : ''"
          >
            {{ item.title }}
          </v-btn>
        </template>
        <v-list v-if="item.children && item.children.length">
          <v-list-item
            v-for="(child, j) in item.children"
            :key="j"
          >
            <v-list-item-title to="/">{{ child.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-toolbar-items>

    <v-spacer />

    <v-btn icon>
      <v-icon color="white">mdi-account</v-icon>
    </v-btn>

    <v-btn icon @click="toggleDarkMode">
      <v-icon color="white">mdi-weather-night</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
import menuItems from '@/config/menu.json'
import { name } from '@/config/application.json'

export default {
  name: 'Navbar',
  data: () => ({
    appTitle: name,
    menuItems,
  }),
  methods: {
    toggleDrawer () {
      this.$store.commit('global/TOGGLE_DRAWER', !this.drawer)
    },
    toggleDarkMode () {
      this.$store.commit('global/TOGGLE_DARK_MODE', !this.$vuetify.theme.dark)
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style>

</style>