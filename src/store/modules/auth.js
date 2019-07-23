/* eslint no-shadow: 0 */
import Api from '../../api';
import { lsRemove, lsSet } from '../../utils';

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
      commit('auth_request');
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
            if (rememberMe) lsSet('user', email);
            commit('auth_success', email);
            resolve(response);
          }
        })
        .catch(error => {
          commit('auth_error');
          lsRemove('user');
          reject(error);
        });
    });
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit('logout');
      lsRemove('user');
      resolve();
    });
  }
};

// mutations
const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, userEmail) {
    state.status = 'success';
    state.user = userEmail;
  },
  auth_error(state) {
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
