import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Login from './components/Login';
import Display from './components/Display';
import Increment from './components/Increment';
import store from './vuex/store';
import { api } from './config';
import { AUTH_STORE } from './vuex/mutation-types';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = api.base;

Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (!response.headers['access-token']) return;

    store.dispatch(AUTH_STORE, {
      token: response.headers['access-token'],
      clientId: response.headers.client,
      userId: response.headers.uid,
      expiry: response.headers.expiry
    });
  });
});

const router = new VueRouter({
  history: true
});

router.map({
  '/login': {
    component: Login
  },
  '/display': {
    component: Display
  },
  '/increment': {
    component: Increment
  }
});

router.start(App, 'app');
