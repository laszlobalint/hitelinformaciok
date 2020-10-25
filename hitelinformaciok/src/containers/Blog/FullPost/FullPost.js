import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './FullPost.module.css';

const FullPost = (props) => {
  const { match, posts } = props;

  const [loadedPost, setLoadedPost] = useState(posts.find((post) => post.id === match.params.id));

  useEffect(() => {
    setLoadedPost(posts.find((post) => post.id === match.params.id));
  }, [match.params.id, posts]);

  const postDeletedHandler = () => {};

  let post = <p className={classes.Align}>Válassz egy cikkbejegyzést!</p>;

  if (match.params.id) post = <p className={classes.Align}>Betöltés...</p>;

  if (loadedPost) {
    post = (
      <div className={classes.FullPost}>
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <div className={classes.Edit}>
          <button className={classes.Delete} onClick={postDeletedHandler}>
            Törlés
          </button>
        </div>
      </div>
    );
  }

  return post;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(FullPost);
