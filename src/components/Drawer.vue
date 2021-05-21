<template>
  <v-navigation-drawer
    v-model="drawer"
    v-if="$vuetify.breakpoint.mobile"
    app
    class="primary white--text"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title white--text">
          {{ appTitle }}
        </v-list-item-title>
        <v-list-item-subtitle class="white--text">
          {{ appDescription }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        link
        :to="!item.childre ? item.path : ''"
      >
        <v-list-item-icon>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title  class="white--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { name, shortDescription } from '@/config/application.json'
import menuItems from '@/config/menu.json'

export default {
  name: 'Drawer',
  data: () => ({
    appTitle: name,
    appDescription: shortDescription,
    menuItems: menuItems
  }),
  computed: {
    drawer: {
      get () {
        return this.$store.getters['global/getDrawerValue']
      },
      set (value) {
        this.$store.commit('global/TOGGLE_DRAWER', value)
      }
    }
  }
}
</script>
