import { SET_CURRENT_USER, USER_CLICK } from './userConstants';

const initialState = {
  currentUser: null,
  text: '',
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: actions.payload,
      };
    case USER_CLICK:
      return {
        ...state,
        text: actions.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
