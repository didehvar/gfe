<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
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
    console.log(this.$route.query);
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
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
