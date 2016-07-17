import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import plugins from './plugins';

Vue.use(Vuex);

const state = {};

const mutations = {};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  plugins,
  modules: {
    auth
  }
});
