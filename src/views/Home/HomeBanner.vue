<template>
  <v-carousel
    :hide-delimiter-background="true"
    :hide-delimiters="true"
    :show-arrows="true"
    :show-arrows-on-hover="true"
    cycle
  >
    <!-- 
      La couleur appliquée au toolbar est transparente donc il n'est pas visible.
      Grace au style appliqué au toolbar on l'aura en dessous du carousel.
     -->
    <v-toolbar
      elevation="0"
      color="rgba(0,0,0,0)"
      style="position:absolute;top:75px;z-index:1; width: 100%;"
    >
      <div style="margin: auto; width: 80%;">
        <!-- Autocomplete des user (search bar) -->
        <v-autocomplete
          id="search-bar"
          autofocus
          :items="users"
          solo
          hide-selected
          :item-text="(user) => user.name.first + ' ' + user.name.last"
          append-icon="mdi-account-search"
          placeholder="Start typing to Search"
          class="rounded-xl"
          color="secondary"
        >
          <!-- slot pour les item dans la liste -->
          <template v-slot:item="{ item }">
            <v-list-item-avatar>
              <v-img
                :alt="`${item.name.first} avatar`"
                :src="item.picture.thumbnail"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold white--text" v-text="item.name.first + ' ' + item.name.last" />
            </v-list-item-content>
          </template>

          <!-- slot pour le item selectionné -->
          <template v-slot:selection="{ item }">
            <v-list-item-avatar>
              <v-img
                :alt="`${item.name.first} avatar`"
                :src="item.picture.thumbnail"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold secondary--text" v-text="item.name.first + ' ' + item.name.last" />
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </div>
    </v-toolbar>

    <!--
      home sliders
    -->
    <v-carousel-item
      v-for="(slide, i) in homeSliders"
      :key="i"
      :src="slide.src"
    />

  </v-carousel>
</template>

<script>

export default {
  name: 'Banner',
  props: ['users'],
  data: () => ({
    homeSliders : [
      { src: require('@/assets/images/slider/slide-1.webp') },
      { src: require('@/assets/images/slider/slide-2.webp') },
    ],
  })
}
</script>

<style scoped>
header >>> .v-input__slot {
  margin: 0 !important;
}
header >>> .v-text-field__details {
  display: none !important;
}

.theme--light.v-list{
  background: #466f6e;
}

.theme--light.v-list-item:hover:before {
    opacity: 0.14;
}
</style>
