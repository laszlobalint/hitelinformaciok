import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import { DATABASE_API_KEY, DATABASE_ENDPOINT_BASE } from '../../shared/configuration';

export function* authenticateSaga(action) {
  yield put(actions.authenticateInitialized());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  const URL = `${DATABASE_ENDPOINT_BASE}${DATABASE_API_KEY}`;
  try {
    const response = yield axios.post(URL, authData);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(actions.authenticateSuccess(response.data.idToken, response.data.localId));
  } catch (error) {
    yield put(actions.authenticateFailure(error.response.data.error));
  }
}

export function* authenticateLogoutSaga(action) {
  yield call([localStorage, 'clear']);
}
