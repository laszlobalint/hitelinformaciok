import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Posts.module.css';
import * as actions from '../../../store/actions';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

const Posts = (props) => {
  const { posts, error, history, match, onDeletePost } = props;

  const postSelectedHandler = (id) => history.push(`/${id}`);

  const postDeletedHandler = (uniqe) => {
    onDeletePost(uniqe);
    history.push(`/posts`);
  };

  let postElements = <span className={classes.Error}>Hiba a cikkek betöltésekor!</span>;

  if (!error) {
    postElements = posts
      .sort((a, b) => b.id - a.id)
      .map((post) => (
        <NavLink to={`${match.url}/${post.id}`} key={post.uniqe}>
          <Post category={post.category} title={post.title} clicked={() => postSelectedHandler(post.id)} />
        </NavLink>
      ));
  }

  return (
    <div>
      <section className={classes.Posts}>{postElements}</section>
      <Route
        path={`${match.url}/:id`}
        exact
        render={(props) => <FullPost {...props} onDeletePost={(uniqe) => postDeletedHandler(uniqe)} />}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    error: state.posts.error,
    loading: state.posts.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePost: (id) => dispatch(actions.deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
