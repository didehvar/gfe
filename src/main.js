import _ from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Login from './components/Login';
import Display from './components/Display';
import Increment from './components/Increment';
import store from './vuex/store';
import { api } from './config';
import { AUTH_START, AUTH_VALID, AUTH_INVALID, AUTH_STORE_USER } from './vuex/mutation-types';
import { authKeys } from './vuex/modules/auth';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = api.base;

Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (!response.headers['access-token']) return;

    store.dispatch(AUTH_START, {
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

router.beforeEach(({ to, next }) => {
  if (_.isEmpty(to.query) || !_.some(to.query, (value, key) => authKeys.indexOf(key) >= 0)) {
    return next();
  }

  store.dispatch(AUTH_START, {
    token: to.query.auth_token,
    clientId: to.query.client_id,
    userId: to.query.uid,
    expiry: to.query.expiry
  });

  Vue.http.get(api.auth.validate)
    .then(response => {
      store.dispatch(AUTH_VALID);
      store.dispatch(AUTH_STORE_USER, response.json().data);
    })
    .catch(err => store.dispatch(AUTH_INVALID, err))
    .finally(() => next());
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
