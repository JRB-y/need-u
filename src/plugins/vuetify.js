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
        grey: '#dde3e6',
      },
      dark: {
        primary: '#ee957f',
        darkText: '#653b31',
        secondary: '#466F6E',
        grey: '#1b1c1c',
      }
    }
  }
});
