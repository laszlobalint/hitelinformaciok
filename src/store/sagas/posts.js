import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import { DATABASE_URL } from '../../shared/configuration';

export function* fetchPostsSaga(action) {
  yield put(actions.fetchPostsInitialized());
  try {
    const response = yield axios.get(`${DATABASE_URL}/posts.json`);
    const counter = yield axios.get(`${DATABASE_URL}/counter.json`);
    const posts = [];
    for (let key in response.data) posts.push({ ...response.data[key], uniqe: key });
    yield put(actions.fetchPostsSuccess(posts, counter.data));
  } catch (error) {
    yield put(actions.fetchPostsFailure(error.message));
  }
}

export function* savePostSaga(action) {
  yield put(actions.savePostInitialized());
  try {
    const token = localStorage.getItem('token');
    const response = yield axios.post(`${DATABASE_URL}/posts.json?auth=${token}`, action.post);
    yield axios.put(`${DATABASE_URL}/counter.json?auth=${token}`, action.counter);
    yield put(actions.savePostSuccess({ ...action.post, uniqe: response.data.name }));
  } catch (error) {
    yield put(actions.savePostFailure(error.message));
  }
}

export function* deletePostSaga(action) {
  yield put(actions.deletePostInitialized());
  try {
    const token = localStorage.getItem('token');
    yield axios.delete(`${DATABASE_URL}/posts/${action.uniqe}.json?auth=${token}`);
    yield put(actions.deletePostSuccess(action.uniqe));
  } catch (error) {
    yield put(actions.deletePostFailure(error.message));
  }
}
