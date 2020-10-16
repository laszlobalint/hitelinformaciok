import React, { Suspense } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Aux from './hoc/Auxiliary/Auxiliary';
import Layout from './hoc/Layout/Layout';
import Header from './components/Header/Header';
import Scroller from './components/Scroller/Scroller';
import Preloader from './components/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App = (props) => {
  const Calculator = React.lazy(() => {
    return import('./containers/Calculator/Calculator');
  });

  const fallback = <article style={{ textAlign: 'center' }}>Hitelinformációk.hu betöltése...</article>;

  const routes = (
    <Switch>
      <Route path="/calculator" render={(props) => <Calculator {...props} />} />
      <Route path="/" component={Main} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Aux>
      <Layout>
        <Header />
        <Suspense fallback={fallback}>{routes}</Suspense>
        <Scroller />
        <Preloader />
        <Footer />
      </Layout>
    </Aux>
  );
};

export default withRouter(App);
