import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Articles from '../../components/Articles/Articles';
import Opinions from '../../components/Opinions/Opinions';
import Customer from '../../components/Customer/Customer';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Features from '../../components/Features/Features';
import Partners from '../../components/Partners/Partners';

const Main = (props) => (
  <Aux>
    <Articles />
    <Customer />
    <Opinions />
    <HowItWorks />
    <Features />
    <Partners />
  </Aux>
);

export default Main;
