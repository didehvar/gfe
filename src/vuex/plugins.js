import createLogger from 'vuex/logger';
// import Vue from 'vue';
// import { AUTH_START } from './mutation-types';

const localStoragePlugin = store => {
  store.subscribe((mutation, state) => localStorage.setItem('state', JSON.stringify(state)));
};

// const authHeaders = store => {
//   store.subscribe((mutation, state) => {
//     if (mutation.type !== AUTH_START) return;
//
//     const { token, clientId, userId, expiry } = state.auth.auth;
//
//     Vue.http.headers.common['token-type'] = 'Bearer';
//     Vue.http.headers.common['access-token'] = token;
//     Vue.http.headers.common.client = clientId;
//     Vue.http.headers.common.uid = userId;
//     Vue.http.headers.common.expiry = expiry;
//   });
// };

export default [
  createLogger(),
  localStoragePlugin
  // authHeaders
];
