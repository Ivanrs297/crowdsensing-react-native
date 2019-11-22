import {
    LOGIN_SUCCESS,
    LOGOUT
  } from '../actions/auth';

const initialState = {
    user: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {

    case LOGOUT:
      return initialState;

    case LOGIN_SUCCESS:
      return { ...state, user: action.payload  };

    default:
      return state;
  }
};

export default auth;
