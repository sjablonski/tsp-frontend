import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import { connect } from 'react-redux';
import { routes } from 'routes';
import PropTypes from 'prop-types';
import MainPage from 'views/MainPage';
import LoginPage from 'views/LoginPage';
import HomeAdmin from 'views/admin/HomeAdmin';
import HomeSubs from 'views/subs/HomeSubs';
import HomeTech from '../views/tech/HomeTech';

const Paths = ({ isAuthenticated }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.main} component={MainPage} />
      <Route exact path={routes.login} component={LoginPage} />
      <PrivateRoute exact path={routes.homeAdmin} component={HomeAdmin} authed={isAuthenticated} />
      <PrivateRoute exact path={routes.homeTech} component={HomeTech} authed={isAuthenticated} />
      <PrivateRoute exact path={routes.homeSubs} component={HomeSubs} authed={isAuthenticated} />
    </Switch>
  </BrowserRouter>
);

Paths.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated });
export default connect(mapStateToProps)(Paths);
