import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './locale/en';
import pl from './locale/pl';
import store from './store';

Vue.use(VueI18n);

export const messages = { en, pl };
export const i18n = new VueI18n({
  locale: store.getters['locale/currentLangCode'] || 'en',
  messages
});
