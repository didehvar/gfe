<template>
  <ui-navbar>
    <div slot="actions">
      <button v-if="authenticated" @click="logout">logout</button>
      <button v-else @click="login">login</button>
    </div>
  </ui-navbar>
</template>

<script>
import UiNavbar from './ui/UiNavbar';
import { api } from '../config';
import { authenticated } from '../vuex/getters';
import { logout } from '../vuex/actions';

export default {
  components: {
    UiNavbar
  },

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
