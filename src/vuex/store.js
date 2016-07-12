import Vue from 'vue';
import Vuex from 'vuex';
import storage from './storage';
import plugins from './plugins';
import { AUTH } from './storage-keys';
import {
  INCREMENT,
  LOGIN_SUCCESS
} from './mutation-types';

Vue.use(Vuex);

const state = {
  count: 0,
  auth: storage.get(AUTH)
};

const mutations = {
  [INCREMENT]: (state, amount) => {
    state.count = state.count + amount;
  },
  [LOGIN_SUCCESS]: (state, auth) => {
    state.auth = auth;
  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  plugins
});
