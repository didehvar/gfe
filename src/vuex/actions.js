import {
  INCREMENT,
  LOGIN_SUCCESS
} from './mutation-types';

export const incrementCounter = ({ dispatch, state }) => {
  dispatch(INCREMENT, 1);
};

export const login = ({ dispatch, state }, auth) => {
  dispatch(LOGIN_SUCCESS, auth);
};
