<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store';
import Navbar from './components/Navbar';
import { authenticated } from './vuex/getters';
import { interceptAuthHeaders, oauthLogin } from './vuex/actions';

export default {
  store,
  components: {
    Navbar
  },

  created() {
    this.interceptAuthHeaders();

    const query = this.$route.query;
    if (query && query.auth_token) {
      this.oauthLogin(query);
    }
  },

  vuex: {
    getters: {
      authenticated,
      user: state => state.auth.user
    },
    actions: {
      interceptAuthHeaders,
      oauthLogin
    }
  }
};
</script>

<style>
</style>
