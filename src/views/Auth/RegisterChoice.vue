<template>
  <div>
    <v-row class="mb-5 mt-10 text-center" justify="center">
      <v-col cols="6" class="choice font-weight-bold text-h5" @click="goto('neede')">
        {{ NEEDE.toUpperCase() }}
      </v-col>
    </v-row>

    <v-row class="mb-5 mt-5 text-center" justify="center">
      <v-col cols="6" class="choice font-weight-bold text-h5" @click="goto('needeur')">
        {{ NEEDEUR.toUpperCase() }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vars from '@/config/vars'

export default {
  name: 'RegisterChoice',
  data () {
    return {
      NEEDE: vars.NEEDE,
      NEEDEUR: vars.NEEDEUR,
    }
  },
  methods: {
    goto (where) {
      switch (where) {
        case 'neede':
          this.$router.push('/register/needé')
          break;
        case 'needeur':
          this.$router.push('/register/needeur')
          break;
        default:
          break;
      }
    }
  },
}
</script>

<style scoped>
  .choice {
    color: #5c5f6e;
    background-color: #ee9580;
    border-radius: 15px;
    cursor: pointer;
  }
  .choice:hover {
    color: white;
  }
</style>