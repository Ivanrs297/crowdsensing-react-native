export const SET_VARIABLES = "SET_VARIABLES";
export const SET_LAST_VARIABLE = "SET_LAST_VARIABLE";

import { setLoadingSpinner } from './loaders'
import config from '../config';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Alert } from "react-native";


export function setVariables(data) {
  return {
    type: SET_VARIABLES,
    payload: data
  };
}

export function setLastVariable(data) {
  return {
    type: SET_LAST_VARIABLE,
    payload: data
  };
}

export function fetchVariables() {
  let URL = `${config.serverSideUrl}:${config.port}/api/variables/`;
  return (dispatch, getState) => {
    axios.get( URL )
      .then( res => {
        console.log("fetchVariables RES: ", res);
        dispatch(setVariables(res.data));
        dispatch(setLoadingSpinner(false));
      })
      .catch(e => {
        console.log("ERROR fetchVariables", e.response);
      })
    };
}

export function fetchLastVariable() {
  let URL = `${config.serverSideUrl}:${config.port}/api/variables/last`;
  return (dispatch, getState) => {
    axios.get( URL )
      .then( res => {
        console.log("fetchLastRead RES: ", res);
        dispatch(setLastVariable(res.data));
        dispatch(setLoadingSpinner(false));
      })
      .catch(e => {
        console.log("ERROR fetchLastRead", e.response);
      })
    };
}

export function deleteVariable(item) {
  let URL = `${config.serverSideUrl}:${config.port}/api/variables/${item}`;
  return (dispatch, getState) => {
    axios.delete( URL )
      .then( res => {
        console.log("deleteVariable RES: ", res);
        dispatch(fetchVariables(res.data));
      })
      .catch(e => {
        console.log("ERROR deleteVariable", e.response);
      })
    };
}


