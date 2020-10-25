import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Auth.module.css';
import * as actions from '../../store/actions';
import { updateObject } from '../../shared/utility';
import { checkValidity } from '../../shared/validation';
import { loginFormControls } from './Auth.input';
import Input from '../../components/Input/Input';

const Auth = (props) => {
  const { isAuthenticated, error, loading, onAuthenticate } = props;

  const [controls, setControls] = useState(loginFormControls);
  const [isValid, setIsValid] = useState(false);

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

  const submitHandler = (event) => {
    event.preventDefault();
    onAuthenticate(controls.email.value, controls.password.value);
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
        invalid={!element.config.valid}
        shouldValidate={element.config.validation}
        touched={element.config.touched}
        changed={(event) => inputChangedHandler(event, element.id)}
      />
    )),
    <button key="button" type="submit" disabled={!isValid}>
      BEJELENTKEZÉS
    </button>,
  ];

  if (loading) form = <h2 className={classes.Loading}>Bejelentkezés folyamatban... Kérjük, hogy várj.</h2>;

  let redirect = null;
  if (isAuthenticated) redirect = <Redirect to="/" />;

  let errorMessage = null;
  if (error) errorMessage = <p className={classes.Error}>{props.error}</p>;

  return (
    <div className={classes.Auth}>
      <h2>Adminisztrátori felület</h2>
      {redirect}
      {errorMessage}
      <form onSubmit={submitHandler}>{form}</form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token && state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticate: (email, password) => dispatch(actions.authenticate(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
