// @flow
import { AsyncStorage } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';
import reducer from "../reducers";
import promise from './promise';


export default function configureStore(onCompletion): any {
  const logger = createLogger();
  const enhancer = compose(
    applyMiddleware(thunk, promise, logger),
    autoRehydrate()
  );

  const store = createStore(reducer, enhancer);
  persistStore(
    store,
    { storage: AsyncStorage },
    onCompletion
  );

  return store;
}
