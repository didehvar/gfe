import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import plugins from './plugins';
import { INCREMENT } from './mutation-types';

Vue.use(Vuex);

let state = {};

try {
  state = JSON.parse(localStorage.getItem('state')) || {};
} catch (e) {
  console.error('Failed to parse saved state', e); // todo: better error
};

const mutations = {
  [INCREMENT]: (state, amount) => {
    state.count = state.count + amount;
  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  plugins,
  modules: {
    auth
  }
});
