import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hello from './components/Hello';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/login': {
    component: Hello
  }
});

router.start(App, 'app');
