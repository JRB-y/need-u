<template>
  <v-row style="display: block !important;">
    <v-toolbar
      dark
      flat
      color="transparent"
    >
      <v-fab-transition>
        <v-btn color="secondary" text fab small absolute left @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-toolbar>
  </v-row>
</template>

<script>
export default {
  name: 'GoBack',
}
</script>
