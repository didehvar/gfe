import _ from 'lodash';

export default {
  get(state, key, defaultValue) {
    let data;

    try {
      data = JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
      console.error('Failed to parse object from storage: ', e); // todo: better errors
    }

    if (defaultValue !== undefined && (data === null || data === undefined)) {
      data = defaultValue;
    }

    return _.set(state, key, data);
  },

  set(state, key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save object to storage: ', e); // todo: better errors
    }

    return _.set(state, key, data);
  }
};
