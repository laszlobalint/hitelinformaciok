import React, { useState, useEffect, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions';
import getRoutes from './routes/routes';
import Aux from './hoc/Auxiliary/Auxiliary';
import Layout from './hoc/Layout/Layout';
import Header from './components/Header/Header';
import Scroller from './components/Scroller/Scroller';
import Preloader from './components/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import Chat from './containers/Chat/Chat';

const App = (props) => {
  const { isAuthenticated, onFetchPosts } = props;

  const [routes, setRoutes] = useState(null);

  useEffect(() => {
    setRoutes(getRoutes(isAuthenticated));
    onFetchPosts();
  }, [isAuthenticated, onFetchPosts]);

  const fallback = <article style={{ textAlign: 'center' }}>Hitelinformációk.hu betöltése...</article>;

  return (
    <Aux>
      <Layout>
        <Header />
        <Suspense fallback={fallback}>{routes}</Suspense>
        <Scroller />
        <Preloader />
        <Chat />
        <Footer isAuthenticated={isAuthenticated} />
      </Layout>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token && state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: () => dispatch(actions.fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
