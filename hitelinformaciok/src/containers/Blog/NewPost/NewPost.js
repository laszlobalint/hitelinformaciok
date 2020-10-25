import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './NewPost.module.css';
import * as actions from '../../../store/actions';
import { newPostFormControls } from './NewPost.input';
import { updateObject } from '../../../shared/utility';
import { checkValidity } from '../../../shared/validation';
import Input from '../../../components/Input/Input';

const NewPost = (props) => {
  const { counter, error, loading, isAuthenticated, onSavePost } = props;

  const [controls, setControls] = useState(newPostFormControls);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, controls[controlName].validation),
        touched: true,
      }),
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) formIsValid = updatedControls[inputIdentifier].valid && formIsValid;

    setControls(updatedControls);
    setIsValid(formIsValid);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const newPostData = {
      id: counter + 1,
      title: controls.title.value,
      body: controls.body.value,
      category: controls.category.value,
    };
    onSavePost(newPostData, newPostData.id);
    setIsSubmitted(true);
  };

  const formElements = [];
  for (let key in controls) formElements.push({ id: key, config: controls[key] });

  let form = [
    formElements.map((element) => (
      <Input
        key={element.id}
        elementType={element.config.elementType}
        elementConfig={element.config.elementConfig}
        value={element.config.value}
        label={element.config.label}
        invalid={!element.config.valid}
        shouldValidate={element.config.validation}
        touched={element.config.touched}
        changed={(event) => inputChangedHandler(event, element.id)}
      />
    )),
    <button key="button" type="submit" disabled={!isValid}>
      KÜLDÉS
    </button>,
  ];

  if (loading) {
    form = <h2 className={classes.Loading}>Kérjük, hogy várj...</h2>;
  }

  let redirect = null;
  if (!isAuthenticated) redirect = <Redirect to="/" />;
  if (isSubmitted) redirect = <Redirect to="/blog" />;

  let errorMessage = null;
  if (error) errorMessage = <p className={classes.Error}>{props.error}</p>;

  return (
    <div className={classes.NewPost}>
      <h1>Új cikk létrehozása</h1>
      {redirect}
      {errorMessage}
      <form className={classes.InputElement} onSubmit={submitFormHandler}>
        {form}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.posts.counter,
    loading: state.posts.loading,
    error: state.posts.error,
    isAuthenticated: state.auth.token && state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSavePost: (post, counter) => dispatch(actions.savePost(post, counter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
