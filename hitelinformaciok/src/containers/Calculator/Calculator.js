import React, { useState } from 'react';

import { getEncryptedUserData, getCalculatorURL } from './Calculator.class';

const Calculator = (props) => {
  const [userData, setUserData] = useState(getEncryptedUserData('John Doe', 'john.doe@mailinator.com', '1241234535', '6723', 'anytime'));
  const [calculatorUrl, setCalculatorUrl] = useState(
    getCalculatorURL(19, 10000000, 240, 5, false, undefined, [], false, 0, 'test@test.hu', 'home_loan'),
  );

  return (
    <div className="container">
      <iframe
        src={calculatorUrl}
        width="100%"
        height="1400px"
        className="iframe-to-resize"
        frameBorder={0}
        title="calculatorFrame"
      ></iframe>
    </div>
  );
};

export default Calculator;
