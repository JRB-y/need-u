<template>
  <v-container class="mb-15">
    <GoBack />
    <v-container class="px-15">
      <v-row align="center" class="mb-5">
        <h3 class="text-h3 secondary--text font-weight-bold mr-4">F.A.Q</h3>
        <v-icon class="text-h4 secondary--text font-weight-bold mt-1">mdi-comment-multiple-outline</v-icon>
      </v-row>
      <v-row class="body-1 secondary--text">
        Nos question les plus fréquentes
      </v-row>

      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel
            class="ma-3 rounded-xl gray-dark--text"
            style="border: 2px solid #ee957f !important"
            v-for="(item,i) in 5"
            :key="i"
          >
            <v-expansion-panel-header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

    </v-container>
  </v-container>
</template>

<script>
import GoBack from '@/components/GoBack'

export default {
  name: 'Faq',
  components: { GoBack },
}
</script>
