import storage from './storage';
import { AUTH } from './storage-keys';

const localStoragePlugin = store => {
  store.subscribe((mutation, { auth }) => storage.set(AUTH, auth));
};

export default [localStoragePlugin];
