import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

import classes from './FullPost.module.css';

const FullPost = (props) => {
  const { match, posts, isAuthenticated, onDeletePost } = props;

  const [loadedPost, setLoadedPost] = useState(null);

  const isValid = () => loadedPost && match.params.id && !isNaN(match.params.id);

  let post = <p className={classes.Align}>Válassz egy cikkbejegyzést!</p>;

  if ((loadedPost && loadedPost.id !== Number(match.params.id)) || (posts && !loadedPost))
    setLoadedPost(posts.find((post) => Number(post.id) === Number(match.params.id)));

  if (loadedPost) {
    post = (
      <div className={classes.FullPost}>
        <h1>{loadedPost.title}</h1>
        <div> {ReactHtmlParser(loadedPost.body)} </div>
        <p className={classes.Category}>{loadedPost.category === 'residental' ? '#lakossági' : '#vállalati'}</p>
        <div className={classes.Edit}>
          {isAuthenticated && (
            <button className={classes.Delete} onClick={() => onDeletePost(loadedPost.uniqe)} disabled={!isValid}>
              Törlés
            </button>
          )}
        </div>
      </div>
    );
  }

  return post;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    isAuthenticated: state.auth.token && state.auth.userId,
  };
};

export default connect(mapStateToProps)(FullPost);
