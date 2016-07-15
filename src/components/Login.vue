<template>
  <button v-on:click="strava">Login</button>
</template>

<script>
import { api } from '../config';

export default {
  methods: {
    strava() {
      let url = api.auth.strava;
      url += `?auth_origin_url=${encodeURIComponent(window.location.href)}`;

      window.location.replace(url);
    }
  }
};
</script>
