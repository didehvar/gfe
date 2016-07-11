import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hello from './components/Hello';
import Display from './components/Display';
import Increment from './components/Increment';

Vue.use(VueRouter);

const router = new VueRouter({
  history: true
});

router.map({
  '/login': {
    component: Hello
  },
  '/display': {
    component: Display
  },
  '/increment': {
    component: Increment
  }
});

router.start(App, 'app');
