import createLogger from 'vuex/logger';

const localStoragePlugin = store => {
  store.subscribe((mutation, state) => localStorage.setItem('state', JSON.stringify(state)));
};

export default [
  createLogger(),
  localStoragePlugin
];
