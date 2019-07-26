/* eslint no-shadow: 0 */
import { asyncLsSet, lsGet } from '../../utils';

const state = {
  language_code: ''
};

// getters
const getters = {
  currentLangCode: state => {
    return state.language_code || lsGet('lang');
  }
};

// actions
const actions = {
  setLanguage({ commit }, langCode) {
    asyncLsSet('lang', langCode).then(() => {
      commit('localeSetLanguage', langCode);
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
