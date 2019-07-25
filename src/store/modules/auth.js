/* eslint no-shadow: 0 */
import Api from '../../api';
import { lsRemove, lsSet, ssRemove, ssSet } from '../../utils';

const state = {
  status: '',
  user: ''
};

// getters
const getters = {
  isLoggedIn: state => !!state.user,
  authStatus: state => state.status
};

// actions
const actions = {
  login({ commit }, { email, password, rememberMe }) {
    return new Promise((resolve, reject) => {
      commit('authRequest');
      Api('/api/v1/login', {
        method: 'POST',
        body: {
          email,
          password
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Host: 'example.org'
        }
      })
        .then(response => {
          if (response.status) {
            if (rememberMe) {
              lsSet('user', email).then();
            } else {
              ssSet('user', email).then();
            }
            commit('authSuccess', email);
            resolve(response);
          }
        })
        .catch(error => {
          commit('authError');
          lsRemove('user').then();
          reject(error);
        });
    });
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit('logout');
      lsRemove('user').then();
      ssRemove('user').then();
      resolve();
    });
  }
};

// mutations
const mutations = {
  authRequest(state) {
    state.status = 'loading';
  },
  authSuccess(state, userEmail) {
    state.status = 'success';
    state.user = userEmail;
  },
  authError(state) {
    state.status = 'error';
  },
  logout(state) {
    state.status = '';
    state.user = '';
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
