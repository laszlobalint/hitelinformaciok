import React from 'react';

import Articles from '../../components/Articles/Articles';
import Opinions from '../../components/Opinions/Opinions';
import Customer from '../../components/Customer/Customer';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Features from '../../components/Features/Features';
import Partners from '../../components/Partners/Partners';

const Main = (props) => (
  <div style={{ backgroundColor: '#eaeaed' }}>
    <Articles />
    <Customer />
    <Opinions />
    <HowItWorks />
    <Features />
    <Partners />
  </div>
);

export default Main;
