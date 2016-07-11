import { INCREMENT } from './mutation-types';

export const incrementCounter = ({ dispatch, state }) => {
  dispatch(INCREMENT, 1);
};
