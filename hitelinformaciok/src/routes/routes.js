import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Main from '../components/Main/Main';

const Calculator = React.lazy(() => {
  return import('../containers/Calculator/Calculator');
});
const Faq = React.lazy(() => {
  return import('../components/Faq/Faq');
});
const Impressum = React.lazy(() => {
  return import('../components/Impressum/Impressum');
});
const DataPrivacy = React.lazy(() => {
  return import('../components/DataPrivacy/DataPrivacy');
});
const Contact = React.lazy(() => {
  return import('../containers/Contact/Contact');
});
const Auth = React.lazy(() => {
  return import('../containers/Auth/Auth');
});
const Logout = React.lazy(() => {
  return import('../containers/Auth/Logout/Logout');
});

const getRoutes = (isAuthenticated) => {
  let routes = null;

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/calculator" render={(props) => <Calculator {...props} />} />
        <Route path="/faq" render={(props) => <Faq {...props} />} />
        <Route path="/impressum" render={(props) => <Impressum {...props} />} />
        <Route path="/data-privacy" render={(props) => <DataPrivacy {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
        <Route path="/logout" render={(props) => <Logout {...props} />} />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/calculator" render={(props) => <Calculator {...props} />} />
        <Route path="/faq" render={(props) => <Faq {...props} />} />
        <Route path="/impressum" render={(props) => <Impressum {...props} />} />
        <Route path="/data-privacy" render={(props) => <DataPrivacy {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
        <Route path="/auth" render={(props) => <Auth {...props} />} />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return routes;
};

export default getRoutes;
