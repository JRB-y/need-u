<template>
  <v-container class="mt-15 mb-15 py-10">
    <v-row class="d-flex" align="center">
      <v-col sm="12" md="6">
        <h1 class="font-weight-bold primary--text">NEED-U C'EST QUOI ?</h1>
        <p class="body-1 gray-dark--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas porro
          assumenda optio, magni beatae eveniet necessitatibus corporis ut
          reprehenderit dolorem totam repellendus? Pariatur error doloribus
          possimus quibusdam beatae est omnis nisi, corporis, impedit velit,
          accusantium assumenda! Ut, eos delectus quisquam incidunt
          necessitatibus at
        </p>
        <v-btn
          class="font-weight-bold"
          color="secondary"
        >
          cliquer ici
        </v-btn>
      </v-col>
      
      <v-col sm="12" md="6" align="center">
        <v-img
          contain
          max-height="300"
          max-width="400"
          src="../../assets/images/quoi.webp"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeCKoi'
}
</script>
