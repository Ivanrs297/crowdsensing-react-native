export type Action = {type: 'OPEN_DRAWER'} | {type: 'CLOSE_DRAWER'};

export type Dispatch = (action: Action | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

export const USER_CREATE_DATA_CHANGE = 'USER_CREATE_DATA_CHANGE';
export const REGISTERING_USER = 'REGISTERING_USER';
export const USER_REGISTERED = 'USER_REGISTERED';
export const LOGIN_ACCESS_TOKEN = 'LOGIN_ACCESS_TOKEN';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_PUSH_TOKEN = 'SET_PUSH_TOKEN';
