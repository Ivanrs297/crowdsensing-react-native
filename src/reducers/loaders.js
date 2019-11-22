import {
    SET_LOADING_SPINNER,
  } from '../actions/loaders';

const initialState = {
    loadingSpinner: false,
};

const loaders = (state = initialState, action) => {
  switch (action.type) {

    case SET_LOADING_SPINNER:
      return { ...state, loadingSpinner: action.payload  };

    default:
      return state;
  }
};

export default loaders;
