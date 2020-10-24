import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import { DATABASE_URL } from '../../shared/configuration';

export function* fetchPostsSaga(action) {
  yield put(actions.fetchPostsInitialized());
  try {
    const response = yield axios.get(`${DATABASE_URL}/posts.json`);
    const posts = [];
    for (let key in response.data) posts.push({ ...response.data[key], id: key });
    yield put(actions.fetchPostsSuccess(posts));
  } catch (error) {
    yield put(actions.fetchPostsFailure(error.response.data.error));
  }
}
