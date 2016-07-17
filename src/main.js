import Vue from 'vue';
import Keen from 'keen-ui';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Home from './components/Home';
import NotFound from './components/errors/NotFound';
import { api } from './config';

Vue.use(Keen);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = api.base;

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

router.map({
  '/': {
    component: Home
  },
  '*': {
    component: NotFound
  }
});

router.start(App, 'app');
