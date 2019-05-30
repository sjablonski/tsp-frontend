import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props => (authed ? <Component {...props} /> : <Redirect to={routes.login} />)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authed: PropTypes.bool.isRequired,
};

export default PrivateRoute;
