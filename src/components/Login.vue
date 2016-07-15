<template>
  <button v-if="!authenticated" v-on:click="strava">Login</button>
  <button v-if="authenticated" v-on:click="logout">Logout</button>
</template>

<script>
import { api } from '../config';
import { authenticated } from '../vuex/getters';
import { logout } from '../vuex/actions';

export default {
  methods: {
    strava() {
      let url = api.auth.strava;
      url += `?auth_origin_url=${encodeURIComponent(window.location.href)}`;

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
