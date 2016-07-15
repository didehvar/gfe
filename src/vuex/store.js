import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import plugins from './plugins';
import { INCREMENT } from './mutation-types';

Vue.use(Vuex);

const state = {
  count: 0
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
