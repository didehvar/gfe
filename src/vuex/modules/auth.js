import _ from 'lodash';
import storage from '../storage';
import {
  AUTH_STORE,
  AUTH_INVALID,
  AUTH_STORE_USER,
  AUTH_CLEAR
} from '../mutation-types';

export const VALID_AUTH_KEYS = ['token', 'clientId', 'userId', 'expiry'];

const AUTH_KEY = 'auth';
const USER_KEY = 'user';
const AUTHENTICATED_KEY = 'authenticated';

const STATE_KEYS = [
  { name: AUTH_KEY },
  { name: USER_KEY },
  { name: AUTHENTICATED_KEY, defaultValue: false }
];

const state = {};
_.each(STATE_KEYS, o => storage.get(state, o.name, o.defaultValue));

const mutations = {
  [AUTH_STORE]: (state, auth) => {
    _.each(_.keys(auth), k => VALID_AUTH_KEYS.indexOf(k) >= 0 || console.error(`Invalid auth state key ${k}`));
    storage.set(state, AUTH_KEY, auth);
    storage.set(state, AUTHENTICATED_KEY, true);
  },
  [AUTH_INVALID]: (state, err) => {
    storage.set(state, AUTHENTICATED_KEY, false);
  },
  [AUTH_STORE_USER]: (state, user) => {
    storage.set(state, USER_KEY, user);
  },
  [AUTH_CLEAR]: (state) => {
    storage.set(state, AUTHENTICATED_KEY, false);
    storage.set(state, AUTH_KEY, {});
    storage.set(state, USER_KEY, {});
  }
};

export default {
  state,
  mutations
};
