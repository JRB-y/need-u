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
        third: '#bbc8ce',
        grey: '#dde3e6',
        whitesmoke: '#f5f5f5',
        'gray-dark': '#2c2c2c',
      },
      dark: {
        primary: '#ee957f',
        darkText: '#653b31',
        secondary: '#466F6E',
        third: '#bbc8ce',
        grey: '#1b1c1c',
        whitesmoke: '#f5f5f5',
        'gray-dark': '#e0e0e0',
      }
    }
  }
});
