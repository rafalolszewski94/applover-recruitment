import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import validationMessagesEn from 'vee-validate/dist/locale/en';
import validationMessagesPl from 'vee-validate/dist/locale/pl';
import './styles/style.scss';
import App from './App';
import router from './router';
import ErrorBar from './plugins/GlobalErrors';
import store from './store';
import { localAndSessionGet } from './utils';
import { parseJSON, responseCheck } from './api';
import en from './locale/en';
import pl from './locale/pl';

Vue.config.productionTip = false;

Vue.use(VueI18n);

export const messages = { en, pl };
export const i18n = new VueI18n({
  locale: store.getters['locale/currentLangCode'] || 'en',
  messages
});
Vue.use(VeeValidate, {
  fastExit: false,
  i18nRootKey: 'validations', // customize the root path for validation messages.
  i18n,
  dictionary: {
    en: validationMessagesEn,
    pl: validationMessagesPl
  }
});
Vue.use(ErrorBar);

const handleGeoPermission = () => {
  navigator.permissions.query({ name: 'geolocation' }).then(result => {
    if (result.state === 'prompt') {
      navigator.geolocation.getCurrentPosition(onSuccess => {
        fetch(
          `https://eu1.locationiq.com/v1/reverse.php?key=f33c14dac4e325&lat=${onSuccess.coords.latitude}&lon=${onSuccess.coords.longitude}&format=json`
        )
          .then(responseCheck)
          .then(parseJSON)
          .then(res => {
            store.dispatch(
              'locale/setLanguage',
              res.address.country_code !== 'pl'
                ? 'en'
                : res.address.country_code
            );
          });
      });
    }
  });
};

/* eslint-disable no-new */
localAndSessionGet('user')
  .then(userEmail => {
    if ('geolocation' in navigator) {
      handleGeoPermission();
    } else {
      const lang =
        navigator.language ||
        (navigator.languages && navigator.languages[0]) ||
        navigator.userLanguage;
      store.dispatch('locale/setLanguage', lang);
    }
    return userEmail;
  })
  .then(userEmail => {
    if (userEmail) store.commit('auth/authSuccess', userEmail);
  })
  .then(() => {
    new Vue({
      el: '#app',
      router,
      store,
      i18n,
      render: h => h(App)
    });
  });
