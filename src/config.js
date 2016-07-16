import _ from 'lodash';

const apiBase = 'http://localhost:3000/';
const authBase = 'auth/';

export const api = {
  base: apiBase,

  auth: _.mapValues({
    base: '',
    validate: 'validate_token',
    strava: 'strava',
    logout: 'sign_out'
  }, url => `${apiBase}${authBase}${url}`)
};
