import React, { useState } from 'react';
import IframeResizer from 'iframe-resizer-react';

import { getCalculatorURL } from './Calculator.class';

const Calculator = (props) => {
  const [calculatorUrl] = useState(
    getCalculatorURL(19, 10000000, 240, 5, false, 'kalkulatorok', [], false, 'info@hitelinformaciok.hu', 'home_loan'),
  );

  return (
    <IframeResizer
      key="iframe"
      id="iframe"
      name="iframe"
      autoResize
      inPageLinks
      src={calculatorUrl}
      bodyBackground="#eaeaed"
      bodyMargin="0"
      bodyPadding="0"
      style={{ width: '1px', minWidth: '100%' }}
      checkOrigin={['http://localhost:3000', 'https://www.hitel.hu', 'http://www.hitel.hu']}
    />
  );
};

export default Calculator;
