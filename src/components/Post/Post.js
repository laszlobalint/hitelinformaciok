import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Post.module.css';

const Post = (props) => (
  <article className={classes.Post} onClick={props.clicked}>
    <h3>{props.title}</h3>
    <div className={classes.Info}>
      <div className={classes.Category}>{props.category === 'residental' ? 'Lakossági' : 'Vállalati'}</div>
    </div>
  </article>
);

export default withRouter(Post);
