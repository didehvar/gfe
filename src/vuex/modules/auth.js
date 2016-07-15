import _ from 'lodash';
import {
  AUTH_START,
  AUTH_VALID,
  AUTH_INVALID,
  AUTH_STORE_USER
} from '../mutation-types';

export const authKeys = ['token', 'clientId', 'userId', 'expiry'];

const state = {
  auth: {},
  user: {},
  authenticated: false
};

const mutations = {
  [AUTH_START]: (state, auth) => {
    _.each(_.keys(auth), k => authKeys.indexOf(k) >= 0 || console.error(`Invalid auth state key ${k}`));
    state.auth = auth;
  },
  [AUTH_VALID]: (state) => {
    state.authenticated = true;
  },
  [AUTH_INVALID]: (state, err) => {
    state.authenticated = false;
  },
  [AUTH_STORE_USER]: (state, user) => {
    state.user = user;
  }
};

export default {
  state,
  mutations
};
