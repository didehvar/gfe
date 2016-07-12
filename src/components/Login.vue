<template>
  <button v-on:click="strava">Login</button>
</template>

<script>
import { login } from '../vuex/actions';

export default {
  route: {
    activate() {
      if (this.$route.query.auth_token) this.login(this.$route.query);
    }
  },

  methods: {
    strava() {
      document.location.href = `/api/auth/strava?auth_origin_url=${encodeURIComponent(window.location.href)}`;
    }
  },

  vuex: {
    actions: {
      login
    }
  }
};
</script>
