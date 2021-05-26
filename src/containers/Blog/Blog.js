import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

const Blog = (props) => (
  <div className={classes.Blog}>
    <div>
      <ul>
        <button>
          <NavLink to="/posts">Cikkek</NavLink>
        </button>
        <button>
          <NavLink to="/new-post">Új cikk</NavLink>
        </button>
      </ul>
    </div>
    <Switch>
      <Route path="/posts" component={Posts} />
      <Route path="/new-post" component={NewPost} />
    </Switch>
  </div>
);

export default Blog;
