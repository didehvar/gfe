import Vue from 'vue';
import { api } from '../config';
import {
  AUTH_CLEAR,
  AUTH_STORE,
  AUTH_INVALID,
  AUTH_STORE_USER,
  AUTH_LOGOUT_ERROR
} from './mutation-types';

export const interceptAuthHeaders = ({ dispatch, state }) => {
  Vue.http.interceptors.push((request, next) => {
    if (state.auth.auth) {
      const { token, clientId, userId, expiry } = state.auth.auth;

      request.headers['token-type'] = 'Bearer';
      request.headers['access-token'] = token;
      request.headers.client = clientId;
      request.headers.uid = userId;
      request.headers.expiry = expiry;
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

export const validateToken = ({ dispatch, state }, replaceUrl = false) => {
  Vue.http.get(api.auth.validate)
    .then(response => {
      dispatch(AUTH_STORE_USER, response.json().data);

      if (replaceUrl) { // remove auth query params
        window.history.replaceState({}, '', window.location.href.split('?')[0]);
      }
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

  validateToken({ dispatch, state }, true);
};

export const logout = ({ dispatch }) => {
  Vue.http.delete(api.auth.logout)
    .then(response => {
      dispatch(AUTH_CLEAR);
    })
    .catch(err => dispatch(AUTH_LOGOUT_ERROR, err));
};
