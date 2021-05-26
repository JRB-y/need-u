<template>
  <v-container>
    <GoBack />
    <v-row class="text-center" justify="center" align="center">
      
      <v-col cols="3" />

      <v-col cols="6" class="text-center inscription-title secondary--text font-weight-bold text-h5">
        INSCRIPTION
      </v-col>

      <v-col cols="3" class="d-flex">
        <v-img
          style="z-index: 0;"
          max-width="100"
          lazy-src="@/assets/images/auth/bg-register.webp"
          src="@/assets/images/auth/bg-register.webp"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoBack from '@/components/GoBack'

export default {
  name: 'RegisterHeader',
  components: { GoBack },
}
</script>

<style scoped>
.inscription-title {
  border: 2px solid #5c5f6e;
  border-radius: 15px;
  padding: 15px 0px;
}
</style>