import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { authenticate as authenticateAction } from 'actions';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';

const LoginPage = ({ role, authenticate }) => (
  <>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {() => {
        if (role === 'USER') {
          return <Redirect to={routes.homeSubs} />;
        }
        if (role === 'ADMIN') {
          return <Redirect to={routes.homeAdmin} />;
        }
        return (
          <Form>
            <Field name="username" type="text" />
            <Field name="password" type="password" />
            <button type="submit">sign in</button>
          </Form>
        );
      }}
    </Formik>
  </>
);

const mapStateToProps = ({ role = null }) => ({
  role,
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
