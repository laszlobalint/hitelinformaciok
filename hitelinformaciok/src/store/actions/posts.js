import * as actionTypes from './actionTypes';

export const fetchPosts = () => {
  return {
    type: actionTypes.FETCH_POSTS,
  };
};

export const fetchPostsInitialized = () => {
  return {
    type: actionTypes.FETCH_POSTS_INITIALIZED,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: actionTypes.FETCH_POSTS_FAILURE,
    error: error.message,
  };
};
