import { INCREMENT, AUTH_CLEAR } from './mutation-types';

export const incrementCounter = ({ dispatch, state }) => {
  dispatch(INCREMENT, 1);
};

export const logout = ({ dispatch }) => {
  dispatch(AUTH_CLEAR);
};
