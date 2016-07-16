<template>
  <p>
    <a v-link="{ path: '/' }">Home</a>
    <a v-link="{ path: '/display' }">Display</a>
    <a v-link="{ path: '/increment' }">Increment</a>
    <button v-on:click="login" v-if="!authenticated">Login</button>
    <button v-on:click="logout" v-if="authenticated">Logout</button>
  </p>
</template>

<script>
import { api } from '../config';
import { authenticated } from '../vuex/getters';
import { logout } from '../vuex/actions';

export default {
  methods: {
    login() {
      const url = `${api.auth.strava}?auth_origin_url=${encodeURIComponent(window.location.href)}`;
      window.location.replace(url);
    }
  },
  vuex: {
    getters: {
      authenticated
    },
    actions: {
      logout
    }
  }
};
</script>

<style scoped>
</style>
