import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions';

const Logout = (props) => {
  const { onAuthenticateLogout } = props;

  useEffect(() => {
    onAuthenticateLogout();
  }, [onAuthenticateLogout]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticateLogout: () => dispatch(actions.authenticateLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
