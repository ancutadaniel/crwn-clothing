import { SET_CURRENT_USER } from './userConstants';

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: actions.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
