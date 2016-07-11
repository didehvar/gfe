import Vue from 'vue';
import Vuex from 'vuex';
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
  state,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
});
