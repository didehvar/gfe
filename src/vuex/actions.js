import Vue from 'vue';
import { api } from '../config';
import { INCREMENT,
  AUTH_CLEAR,
  AUTH_STORE,
  AUTH_INVALID,
  AUTH_STORE_USER
} from './mutation-types';

export const incrementCounter = ({ dispatch, state }) => {
  dispatch(INCREMENT, 1);
};

export const interceptAuthHeaders = ({ dispatch, state }) => {
  Vue.http.interceptors.push((request, next) => {
    if (state.auth.auth) {
      const { token, clientId, userId, expiry } = state.auth.auth;

      Vue.http.headers.common['token-type'] = 'Bearer';
      Vue.http.headers.common['access-token'] = token;
      Vue.http.headers.common.client = clientId;
      Vue.http.headers.common.uid = userId;
      Vue.http.headers.common.expiry = expiry;
    }

    next(response => {
      if (!response.headers['access-token']) return;

      dispatch(AUTH_STORE, {
        token: response.headers['access-token'],
        clientId: response.headers.client,
        userId: response.headers.uid,
        expiry: response.headers.expiry
      });
    });
  });
};

export const validateToken = ({ dispatch, state }) => {
  Vue.http.get(api.auth.validate)
    .then(response => {
      dispatch(AUTH_STORE_USER, response.json().data);
      window.history.replaceState({}, '', window.location.href.split('?')[0]);
    })
    .catch(err => dispatch(AUTH_INVALID, err));
};

export const oauthLogin = ({ dispatch, state }, query) => {
  dispatch(AUTH_STORE, {
    token: query.auth_token,
    clientId: query.client_id,
    userId: query.uid,
    expiry: query.expiry
  });

  validateToken({ dispatch, state });
};

export const logout = ({ dispatch }) => {
  dispatch(AUTH_CLEAR);
};
