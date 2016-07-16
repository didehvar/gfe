import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Display from './components/Display';
import Increment from './components/Increment';
import { api } from './config';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = api.base;

const router = new VueRouter({
  history: true
});

router.map({
  '/display': {
    component: Display
  },
  '/increment': {
    component: Increment
  }
});

router.start(App, 'app');
