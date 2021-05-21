<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="gray">
        <v-row>
          <v-col xs="6" md="3" offset-md="1">
            <span class="font-weight-bold">Nous contacter</span>
            <v-textarea
              class="text-area mt-3"
              outlined
              placeholder="Votre message"
              rows="2"
              auto-grow
              color="primary"
            />
            <v-btn class="secondary white--text pa-5 mt-3" small rounded>Envoyer</v-btn>
          </v-col>

          <v-col sm="12" md="6" offset-md="2" class="mt-1">
            <div class="font-weight-bold mb-3">Nos réseaux sociaux</div>
            <v-btn
              v-for="icon in icons"
              :key="icon.name"
              class="social-icon mb-5 mr-3"
              :href="icon.url"
              target="_blank"
              color="#707070"
              icon
              rounded
            >
              <v-icon size="34px">{{ icon.name }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center primary white--text">
        {{ new Date().getFullYear() }} — <strong>Copyright © by wajih </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { social } from '@/config/application.json'

export default {
  data: () => ({
    icons: social,
  }),
};
</script>

<style scoped>
.text-area >>> textarea {
  color: #555 !important;
  width: 300px !important;
}
.text-area >>> fieldset {
  border-color: #555 !important;
}
.text-area >>> .v-text-field__details {
  display: none;
}
.theme--light.v-btn.v-btn--has-bg {
  background-color: #ee957f !important;
}
</style>