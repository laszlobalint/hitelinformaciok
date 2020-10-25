import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './FullPost.module.css';

const FullPost = (props) => {
  const { match, posts, onDeletePost } = props;

  const [loadedPost, setLoadedPost] = useState(posts.find((post) => Number(post.id) === Number(match.params?.id)));

  const isValid = () => loadedPost && match.params.id && !isNaN(match.params.id);

  let post = <p className={classes.Align}>Válassz egy cikkbejegyzést!</p>;

  if (loadedPost && loadedPost.id !== Number(match.params.id))
    setLoadedPost(posts.find((post) => Number(post.id) === Number(match.params.id)));

  if (loadedPost) {
    post = (
      <div className={classes.FullPost}>
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <i>{loadedPost.category}</i>
        <div className={classes.Edit}>
          <button className={classes.Delete} onClick={() => onDeletePost(loadedPost.uniqe)} disabled={!isValid}>
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
