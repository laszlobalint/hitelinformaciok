import React, { useState } from 'react';

import classes from './Subscription.module.css';
import { subscriptionFormControls } from './Subscription.input';
import { checkValidity } from '../../shared/validation';
import { updateObject } from '../../shared/utility';
import Input from '../../components/Input/Input';

const Subscription = (props) => {
  const [controls, setControls] = useState(subscriptionFormControls);
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

  const formElements = [];
  for (let key in controls) formElements.push({ id: key, config: controls[key] });

  let form = (
    <form>
      {formElements.map((element) => (
        <Input
          key={element.id}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          label={element.config.label}
          invalid={!element.config.valid}
          validate={element.config.validation}
          touched={element.config.touched}
          changed={(event) => inputChangedHandler(event, element.id)}
        />
      ))}
      <button type="submit" disabled={!isValid}>
        KÜLDÉS
      </button>
    </form>
  );

  return (
    <div className={classes.Subscription}>
      <div>
        <h3>Vegye fel velünk a kapcsolatot</h3>
        <p>
          Nincs meg minden válasza? Bizonytalan a lehetőségek terén? Tanácstalan a folytatás kapcsán? Adjon lehetőséget cégünknek egy másfél
          órás díjmentes konzultáció keretein belül.
        </p>
      </div>
      {form}
    </div>
  );
};

export default Subscription;
