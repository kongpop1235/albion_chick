import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#9155FD',
            accent: '#0d6efd',
            secondary: '#8A8D93',
            success: '#56CA00',
            info: '#16B1FF',
            warning: '#FFB400',
            error: '#FF4C51',
            bg_main: '#28243d',
            text_gray_lighten_4 :'#F5F5F5',
            bg_card: '#312d4b',
          },
          dark: {
            primary: '#FF4C51',
            accent: '#0d6efd',
            secondary: '#8A8D93',
            success: '#56CA00',
            info: '#16B1FF',
            warning: '#FFB400',
            error: '#FF4C51',
            bg_main: '#28243d',
            text_gray_lighten_4 :'#F5F5F5',
            bg_card: '#312d4b',
          },
        },
      },
});
