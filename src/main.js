import Vue from 'vue';
import './styles/style.scss';
import App from './App';
import router from './router';
import ErrorBar from './plugins/GlobalErrors';
import store from './store';
import { lsGet } from './utils';

const email = lsGet('user');
if (email) {
  store.commit('auth/auth_success', email);
}

Vue.config.productionTip = false;

Vue.use(ErrorBar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
