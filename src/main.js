import Vue from 'vue';
import './styles/style.scss';
import App from './App';
import router from './router';
import ErrorBar from './plugins/GlobalErrors';

Vue.config.productionTip = false;

Vue.use(ErrorBar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
