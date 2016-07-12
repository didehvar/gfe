import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Login from './components/Login';
import Display from './components/Display';
import Increment from './components/Increment';

Vue.use(VueRouter);
Vue.use(VueResource);

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
