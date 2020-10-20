import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import classes from './Contact.module.css';
import { MAILCHIMP_URL } from '../../shared/configuration.js';
import { contactFormControls } from './Contact.input';
import { checkValidity } from '../../shared/validation';
import { updateObject } from '../../shared/utility';
import Input from '../../components/Input/Input';

const Contact = (props) => {
  const [controls, setControls] = useState(contactFormControls);
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

  const sendFormDataHandler = (event, subscribe) => {
    event.preventDefault();
    const formData = {
      NAME: controls.name.value,
      EMAIL: controls.email.value,
      PHONE: controls.phone.value,
      MESSAGE: controls.message.value,
    };
    subscribe(formData);
  };

  const formElements = [];
  for (let key in controls) formElements.push({ id: key, config: controls[key] });

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status, message }) => {
        let contact = (
          <div className={classes.Contact}>
            <div className={classes.Intro}>
              <h2>Vegye fel velünk a kapcsolatot</h2>
              <p>
                Nincs meg minden válasza? Bizonytalan a lehetőségek terén? Tanácstalan a folytatás kapcsán? Adjon lehetőséget cégünknek egy
                másfél órás díjmentes konzultáció keretein belül.
              </p>
            </div>
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
              <button type="button" disabled={!isValid} onClick={(event) => sendFormDataHandler(event, subscribe)}>
                KÜLDÉS
              </button>
            </form>
          </div>
        );

        if (status === 'sending') contact = <h2 className={classes.Sending}>Üzenet küldése folyamatban... Kérjük, várjon.</h2>;
        if (status === 'error') contact = <h2 className={classes.Error} dangerouslySetInnerHTML={{ __html: `HIBAÜZENET: ${message}` }} />;
        if (status === 'success') contact = <h2 className={classes.Success}>Sikeresen elküldött üzenet. Köszönjük a bizalmat!</h2>;

        return contact;
      }}
    />
  );
};

export default Contact;
