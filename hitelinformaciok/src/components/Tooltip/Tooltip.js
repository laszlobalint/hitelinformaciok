import React from 'react';

import classes from './Tooltip.module.css';
import askUs from '../../assets/images/askUsLogo.png';

const Tooltip = (props) => (
  <div className={classes.AskUsTooltip}>
    <img className={classes.TooltipImage} src={askUs} alt="Kérdezz és kérj hitelképességi ajánlatot!" onClick={props.clicked} />
  </div>
);

export default Tooltip;
