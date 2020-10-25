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

export const fetchPostsSuccess = (posts, counter) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts,
    counter,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: actionTypes.FETCH_POSTS_FAILURE,
    error: error.message,
  };
};

export const savePost = (post, counter) => {
  return {
    type: actionTypes.SAVE_POST,
    post,
    counter,
  };
};

export const savePostInitialized = () => {
  return {
    type: actionTypes.SAVE_POST_INITIALIZED,
  };
};

export const savePostSuccess = (post) => {
  return {
    type: actionTypes.SAVE_POST_SUCCESS,
    post,
  };
};

export const savePostFailure = (error) => {
  return {
    type: actionTypes.SAVE_POST_FAILURE,
    error,
  };
};

export const deletePost = (uniqe) => {
  return {
    type: actionTypes.DELETE_POST,
    uniqe,
  };
};

export const deletePostInitialized = () => {
  return {
    type: actionTypes.DELETE_POST_INITIALIZED,
  };
};

export const deletePostSuccess = (uniqe) => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
    uniqe,
  };
};

export const deletePostFailure = (error) => {
  return {
    type: actionTypes.DELETE_POST_FAILURE,
    error,
  };
};
