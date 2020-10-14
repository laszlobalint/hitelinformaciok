import React from 'react';

import Aux from '../Auxiliary/Auxiliary';

const Layout = (props) => (
  <Aux>
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
