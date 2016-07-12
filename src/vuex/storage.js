export default {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
      // todo: better errors
      console.error('failed to parse object from local storage: ', e);
    }
  },
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
