import config from '../config.js';
import './UserAgent';
import io from 'socket.io-client';
import { Alert } from 'react-native';
import { storeObj } from '../boot/setup';
import {Actions, ActionConst} from 'react-native-router-flux';

let socket = null;

// export function socketClientInit() {
//   const {dispatch, getState} = storeObj.store;
  
//   socket = io(`${config.serverSideUrl}`);

//   socket.on('connect', () => {
//     console.log("Socket conectado!");    
//   });

//   socket.on('disconnect', (reason) => {
//     console.log("Socket desconetado por: ", reason);
//   });



// }