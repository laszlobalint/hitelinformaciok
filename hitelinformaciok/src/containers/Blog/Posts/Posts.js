import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Posts.module.css';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

const Posts = (props) => {
  const { posts, error, history, match } = props;

  const postSelectedHandler = (id) => {
    history.push(`/${id}`);
  };

  const postDeletedHandler = (id) => {};

  let postElements = <span style={{ textAlign: 'center' }}>Hiba a cikkek betöltésekor!</span>;

  if (!error) {
    postElements = posts.map((post) => (
      <NavLink to={`${match.url}/${post.id}`} key={post.id}>
        <Post author={post.author} title={post.title} clicked={() => postSelectedHandler(post.id)} />
      </NavLink>
    ));
  }

  return (
    <div>
      <section className={classes.Posts}>{postElements}</section>
      <Route path={`${match.url}/:id`} exact render={(props) => <FullPost {...props} onDeletePost={(id) => postDeletedHandler(id)} />} />
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
