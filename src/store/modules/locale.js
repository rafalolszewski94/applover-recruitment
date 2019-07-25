/* eslint no-shadow: 0 */
import { lsGet, lsSet } from '../../utils';

const state = {
  language_code: ''
};

// getters
const getters = {
  currentCode: state => state.language_code
};

// actions
const actions = {
  setLanguage({ commit }, langCode) {
    return new Promise((resolve, reject) => {
      const lsValue = () => lsGet('lang').then();
      lsSet('lang', langCode).then();

      if (lsValue() === langCode) {
        commit('localeSetLanguage', langCode);
        resolve(langCode);
      } else {
        reject();
      }
    });
  }
};

// mutations
const mutations = {
  localeSetLanguage(state, langCode) {
    state.language_code = langCode;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
