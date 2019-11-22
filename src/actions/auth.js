export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";


import { setLoadingSpinner } from './loaders'
import config from '../config';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Alert } from "react-native";


export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  };
}

export function clearAuth() {
  return {
    type: LOGOUT,
  };
}

export function logout() {
  return (dispatch, getState) => {
    dispatch(mapDeviceTokenToUser(getState().auth.user, ""));
    dispatch(clearAuth());
  }

}

export function login(loginObj) {
  let URL = `${config.serverSideUrl}:${config.port}/api/auth/login`;
  return (dispatch, getState) => {
    let loginObject = {
      email: loginObj.email,
      password: loginObj.password
    }
    axios.post( URL, loginObject )
      .then( res => {
        console.log("login RES: ", res);
        if (res.data.success){
            dispatch(loginSuccess(res.data.data.user));
            Actions.startupServices();
        } else {
            Alert.alert(
                'Error',
                res.data.message,
                [
                  {text: 'Aceptar', onPress: () => {}},
                ],
                { cancelable: false }
              )
        }
        dispatch(setLoadingSpinner(false));
        
      })
      .catch(e => {
        console.log("ERROR login", e.response);
        Alert.alert(
            'Error',
            'Ha habido un problema, intenta de nuevo',
            [
                {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
            ],
             { cancelable: false }
            )
        dispatch(setLoadingSpinner(false));
      })
    };
}

export function register(registerObj) {
  let URL = `${config.serverSideUrl}:${config.port}/api/auth/signup`;
  return (dispatch, getState) => {
    let registerObject = {
      email: registerObj.email,
      password: registerObj.password,
      fname: registerObj.fname,
      lname: registerObj.lname,
    }
    axios.post( URL, registerObject )
      .then( res => {
        console.log("register RES: ", res);
        if (res.data.success){
            dispatch(loginSuccess(res.data.data.user));
            Actions.startupServices();
        } else {
            Alert.alert(
                'Error',
                res.data.message,
                [
                  {text: 'Aceptar', onPress: () => {}},
                ],
                { cancelable: false }
              )
        }
        dispatch(setLoadingSpinner(false));
        
      })
      .catch(e => {
        console.log("ERROR register", e.response);
        Alert.alert(
            'Error',
            'Ha habido un problema, intenta de nuevo',
            [
                {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
            ],
             { cancelable: false }
            )
        dispatch(setLoadingSpinner(false));
      })
    };
}

export function mapDeviceTokenToUser(user, token) {
  let URL = `${config.serverSideUrl}:${config.port}/api/auth/update`;
  return (dispatch, getState) => {
    let data = {
      user,
      token
    }
    axios.put( URL, data )
      .then( res => {
        console.log("mapDeviceTokenToUser RES: ", res);        
      })
      .catch(e => {
        console.log("ERROR mapDeviceTokenToUser", e.response);
      })
    };

}
