import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  posts: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_INITIALIZED:
      return updateObject(state, { error: null, loading: true });
    case actionTypes.FETCH_POSTS_SUCCESS:
      return updateObject(state, { posts: action.posts, error: null, loading: false });
    case actionTypes.FETCH_POSTS_FAILURE:
      return updateObject(state, { error: action.error, loading: false });
    default:
      return state;
  }
};

export default reducer;
