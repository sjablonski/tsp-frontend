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
import PaymentHistory from 'views/subs/PaymentHistory';
import Payment from 'views/subs/Payment';
import Message from 'views/subs/Message';
import Support from 'views/subs/Support';
import HomeTech from 'views/tech/HomeTech';

const Paths = ({ isAuthenticated }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.main} component={MainPage} />
      <Route exact path={routes.login} component={LoginPage} />
      <PrivateRoute exact path={routes.homeAdmin} component={HomeAdmin} authed={isAuthenticated} />
      <PrivateRoute exact path={routes.homeTech} component={HomeTech} authed={isAuthenticated} />
      <Route exact path={routes.homeSubs} component={HomeSubs} />
      <Route path={routes.PaymentHistorySubs} component={PaymentHistory} />
      <Route path={routes.PaymentSubs} component={Payment} />
      <Route path={routes.MessageSubs} component={Message} />
      <Route path={routes.SupportSubs} component={Support} />
    </Switch>
  </BrowserRouter>
);

Paths.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated });
export default connect(mapStateToProps)(Paths);

// <PrivateRoute exact path={routes.homeSubs} component={HomeSubs} authed={isAuthenticated} />
