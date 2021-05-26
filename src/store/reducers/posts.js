import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  posts: null,
  counter: 0,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_INITIALIZED:
      return updateObject(state, { error: null, loading: true });
    case actionTypes.FETCH_POSTS_SUCCESS:
      return updateObject(state, { posts: action.posts, counter: action.counter, error: null, loading: false });
    case actionTypes.FETCH_POSTS_FAILURE:
      return updateObject(state, { error: action.error, loading: false });
    case actionTypes.SAVE_POST_INITIALIZED:
      return updateObject(state, { error: null, loading: true });
    case actionTypes.SAVE_POST_SUCCESS:
      return savePost(state, action);
    case actionTypes.SAVE_POST_FAILURE:
      return updateObject(state, { error: action.error, loading: false });
    case actionTypes.DELETE_POST_INITIALIZED:
      return updateObject(state, { error: null, loading: true });
    case actionTypes.DELETE_POST_SUCCESS:
      return deletePost(state, action);
    case actionTypes.DELETE_POST_FAILURE:
      return updateObject(state, { error: action.error, loading: false });
    default:
      return state;
  }
};

const savePost = (state, action) => {
  return updateObject(state, { posts: [...state.posts, action.post], counter: state.counter + 1, error: null, loading: false });
};

const deletePost = (state, action) => {
  return updateObject(state, {
    posts: state.posts.filter((post) => post.uniqe !== action.uniqe),
    error: null,
    loading: false,
  });
};

export default reducer;
