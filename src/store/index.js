import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import locale from './modules/locale';
import configurator from './modules/configurator';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    locale,
    auth,
    configurator
  },
  strict: debug
});
