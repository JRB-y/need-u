<template>
<v-layout>

  <!-- Si pas de message déjà envoyé -->
  <v-container pt-10 v-if="!messageSended">
    <v-row>
      <v-col class="mb-5">
        <h1 class="secondary--text">NOUS CONTACTER</h1>
      </v-col>
      <v-col mt-0 class="d-flex flex-row-reverse">
        <v-img
          contain
          max-height="200"
          max-width="200"
          src="@/assets/images/contact/bg-contact.png"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-textarea
        v-model="contactMessage.message"
        label="Votre message"
        filled
        value=""
        :rules="messageRules"
        rounded
      ></v-textarea>
      <v-text-field
        v-model="contactMessage.name"
        class="background"
        :rules="nameRules"
        label="Votre nom"
        required
        filled
        rounded
      />
      <v-text-field
        v-model="contactMessage.email"
        :rules="emailRules"
        label="Votre email"
        filled
        rounded
        required
      />
      <v-select
        v-model="contactMessage.activity"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Choisissez une activité"
        required
        filled
        rounded
      />
      <v-row class="d-flex flex-row-reverse ma-2">
        <v-btn
          :class="{ disabled: !valid }"
          color="secondary"
          dark
          class="mr-4"
          @click="sendContactMessage"
          rounded
        >
          ENVOYER
        </v-btn>
      </v-row>
    </v-form>
  </v-container>

  <!-- Si message est envoyé -->
  <v-container v-else>
    <v-col class="mb-5 text-center mt-10">
      <h1 class="secondary--text">Votre message a été envoyé avec succès</h1>
      <p>
        On vous contactera très rapidement
      </p>
      <p>
        l'équipe <b>Need U</b>
      </p>
    </v-col>
  </v-container>
</v-layout>
</template>


<script>
export default {
  name: 'Contact',

  data: () => ({
    valid: false,
    messageRules: [
      (v) => !!v || "Le messsage est obligatoire",
      (v) => (v && v.length <= 10) || "Le message doit avoir au minimum 10 caractères",
    ],
    nameRules: [
      (v) => !!v || "Le nom est obligatoire",
      (v) => (v && v.length >= 5) || "Le nom doit avoir au minimum 5 caractères",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    contactMessage: {
      message: null,
      name: null,
      email: null,
      activity: null
    },
    items: [
      "loisir et détente",
      "Activités manuelles",
      "Activités sportives",
      "Activités culturelle ",
      "Autre",
    ]
  }),

  computed: {
    messageSended () {
      return this.$store.getters['contact/getMessageSended']
    }
  },

  methods: {
    async sendContactMessage () {
      if (!this.$refs.form.validate()) {
        console.error('ERROR in validating form')
        return
      }

      await this.$store.dispatch('contact/sendMessage', this.contactMessage)
    }
  }
}
</script>
