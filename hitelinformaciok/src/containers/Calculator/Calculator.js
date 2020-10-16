import React, { useState } from 'react';

import classes from './Calculator.module.css';
import { getCalculatorURL } from './Calculator.class';

const Calculator = (props) => {
  // const [userData, setUserData] = useState(getEncryptedUserData('John Doe', 'john.doe@mailinator.com', '1241234535', '6723', 'anytime'));
  const [calculatorUrl] = useState(
    getCalculatorURL(19, 10000000, 240, 5, false, 'kalkulatorok', [], false, 'info@hitelinformaciok.hu', 'home_loan'),
  );

  return (
    <div className="container">
      <iframe
        className={[classes.Calculator, 'iframe-to-resize'].join(' ')}
        id="calculator"
        name="calculator"
        title="Hitelkalkulátorok"
        src={calculatorUrl}
        frameBorder="0"
        referrerPolicy="unsafe-url"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Calculator;
