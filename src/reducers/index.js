import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import drawer from './drawer';
import loaders from './loaders';
import variables from './variables';
import auth from './auth';

export default combineReducers({
  drawer,
  loaders,
  variables,
  auth
});
