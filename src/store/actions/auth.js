import { mapErrorCodeToMessage } from '../../shared/utility';

import * as actionTypes from './actionTypes';

export const authenticate = (email, password) => {
  return {
    type: actionTypes.AUTHENTICATE,
    email,
    password,
  };
};

export const authenticateInitialized = () => {
  return {
    type: actionTypes.AUTHENTICATE_INITIALIZED,
  };
};

export const authenticateSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTHENTICATE_SUCCESS,
    token,
    userId,
  };
};

export const authenticateFailure = (error) => {
  return {
    type: actionTypes.AUTHENTICATE_FAILURE,
    error: mapErrorCodeToMessage(error.message),
  };
};

export const authenticateLogout = () => {
  return {
    type: actionTypes.AUTHENTICATE_LOGOUT,
  };
};
