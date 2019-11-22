import {
    SET_VARIABLES,
    SET_LAST_VARIABLE
  } from '../actions/smartponia';

const initialState = {
    variables: [],   
    lastVariable: {}
};

const variables = (state = initialState, action) => {
  switch (action.type) {

    case SET_LAST_VARIABLE:
      return { ...state, lastVariable: action.payload };

    case SET_VARIABLES:
    return { ...state, variables: action.payload };

    default:
      return state;
  }
};

export default variables;
