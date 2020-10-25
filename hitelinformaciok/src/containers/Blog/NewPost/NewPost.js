import React, { useState } from 'react';

import classes from './NewPost.module.css';

const NewPost = (props) => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [category, setCategory] = useState(null);

  const postDataHandler = () => {
    props.history.replace('/posts');
  };

  return (
    <div className={classes.NewPost}>
      <h1>Új cikk létrehozása</h1>
      <label>Cím</label>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <label>Tartalom</label>
      <textarea rows="4" value={body} onChange={(event) => setBody(event.target.value)} />
      <label>Kategória</label>
      <select value={category} onChange={(event) => setCategory(event.target.value)}>
        <option value="residental">Lakossági</option>
        <option value="business">Vállalati</option>
      </select>
      <button onClick={postDataHandler}>Cikk elküldése</button>
    </div>
  );
};

export default NewPost;
