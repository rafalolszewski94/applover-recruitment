import Vue from 'vue';
import VueI18n from 'vue-i18n';
import './styles/style.scss';
import App from './App';
import router from './router';
import ErrorBar from './plugins/GlobalErrors';
import store from './store';
import { lsGet } from './utils';
import en from './locale/en';
import pl from './locale/pl';

const email = lsGet('user');
if (email) {
  store.commit('auth/auth_success', email);
}

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(ErrorBar);

const messages = { en, pl };
const i18n = new VueI18n({
  locale: 'en',
  messages
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
});
