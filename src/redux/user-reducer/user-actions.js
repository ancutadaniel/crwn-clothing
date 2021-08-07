import { SET_CURRENT_USER, USER_CLICK } from './userConstants';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const userClick = (text) => {
  return {
    type: USER_CLICK,
    payload: text,
  };
};
