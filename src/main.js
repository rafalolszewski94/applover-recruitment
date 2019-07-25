import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import './styles/style.scss';
import App from './App';
import router from './router';
import ErrorBar from './plugins/GlobalErrors';
import store from './store';
import { localAndSessionGet } from './utils';
import en from './locale/en';
import pl from './locale/pl';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VeeValidate, {
  fastExit: false
});
Vue.use(ErrorBar);

const messages = { en, pl };
const i18n = new VueI18n({
  locale: 'en',
  messages
});

/* eslint-disable no-new */
localAndSessionGet('user')
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
