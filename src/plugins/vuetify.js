import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ee957f',
        darkText: '#653b31',
        secondary: '#466F6E',
      },
      dark: {
        primary: '#261a17',
        darkText: '#653b31',
        secondary: '#466F6E',
      }
    }
  }
});
