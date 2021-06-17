<template>
  <v-container class="mb-15">

    <RegisterHeader />

    <div v-if="where === NEEDE" class="register-neede">
      <RegisterNeede />
    </div>

    <div v-else-if="where === NEEDEUR" class="register-needeur">
      <RegisterNeedeur />
    </div>

    <div v-else class="register-choice">
      <RegisterChoice />
    </div>

    <v-row v-if="where === undefined">
      <v-col sm="12" md="6" class="offset-md-3">
        <v-divider class="my-5 mt-15"/>
        <div class="d-flex flex-column text-center">
          <span text>Vous avez un compte ?</span>
          <v-btn text class="secondary" to="/login">Connexion</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vars from '@/config/vars'
import RegisterNeede from './RegisterNeede'
import RegisterNeedeur from './RegisterNeedeur'
import RegisterHeader from './RegisterHeader'
import RegisterChoice from './RegisterChoice'

export default {
  name: 'Register',
  components: { RegisterHeader, RegisterChoice, RegisterNeede, RegisterNeedeur },
  computed: {
    where () {
      return this.$route.params.where
    }
  },
  data () {
    return {
      NEEDE: vars.NEEDE,
      NEEDEUR: vars.NEEDEUR,
    }
  },
}
</script>
