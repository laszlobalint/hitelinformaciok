import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { authenticateSaga, authenticateLogoutSaga } from './auth';
import { fetchPostsSaga } from './posts';

export function* watchAuthentication() {
  yield all([takeLatest(actionTypes.AUTHENTICATE, authenticateSaga), takeEvery(actionTypes.AUTHENTICATE_LOGOUT, authenticateLogoutSaga)]);
}

export function* watchPosts() {
  yield all([takeLatest(actionTypes.FETCH_POSTS, fetchPostsSaga)]);
}
