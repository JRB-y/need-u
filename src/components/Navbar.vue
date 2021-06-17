<template>
  <v-app-bar app class="primary">

    <v-app-bar-nav-icon
      class="white--text"
      v-if="$vuetify.breakpoint.mobile"
      @click="toggleDrawer"
    />

    <v-toolbar-title class="mr-5">
      <router-link to="/" tag="span" style="cursor: pointer" class="white--text">
        <v-img :src="require('@/assets/images/need-u-logo.png')" height="65" width="65"/>
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
            link
            :to="child.path"
          >
            <v-list-item-title >{{ child.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-toolbar-items>

    <v-spacer />


    <v-menu offset-y :close-on-click="true" :close-on-content-click="true" v-model="authMenu" class="rounded-xl">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-on="on" v-bind="attrs">
          <v-icon
            color="white"
            v-text="'mdi-account'"
          />
        </v-btn>
      </template>
      <AuthComponent v-if="!isLogged" />
      <LoggedMenu v-else/>
    </v-menu>


    <v-btn icon @click="toggleDarkMode">
      <v-icon
        color="white"
        v-text="$vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
    </v-btn>

  </v-app-bar>
</template>

<script>
import AuthComponent from '@/views/Auth'
import LoggedMenu from '@/components/LoggedMenu'
import menuItems from '@/config/menu.json'
import { name } from '@/config/application.json'

export default {
  name: 'Navbar',
  components: { AuthComponent, LoggedMenu },
  data: () => ({
    appTitle: name,
    menuItems,
    authMenu: false,
  }),
  methods: {
    toggleDrawer () {
      this.$store.commit('global/TOGGLE_DRAWER', !this.drawer)
    },
    toggleDarkMode () {
      this.$store.commit('global/TOGGLE_DARK_MODE', !this.$vuetify.theme.dark)
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  computed: {
    isLogged () {
      return this.$store.getters['auth/isLogged']
    }
  }
}
</script>

<style scoped>
  .v-menu__content {
    box-shadow: unset;
  }
</style>