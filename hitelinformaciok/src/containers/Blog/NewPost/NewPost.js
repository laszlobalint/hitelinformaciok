import React, { Component } from 'react';
import axios from 'axios';

import classes from './NewPost.module.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    category: 'Max',
  };

  postDataHandler = () => {
    axios
      .post(`/posts`, {
        title: this.state.title,
        body: this.state.content,
        category: this.state.category,
      })
      .then((response) => {
        alert('Post was sent!');
        this.props.history.replace('/posts');
      });
  };

  render() {
    return (
      <div className={classes.NewPost}>
        <h1>Add a Post</h1>
        <label>Title</label>
        <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
        <label>Content</label>
        <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
        <label>Category</label>
        <select value={this.state.category} onChange={(event) => this.setState({ category: event.target.value })}>
          <option value="residental">Lakossági</option>
          <option value="business">Vállalati</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
