import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const MainPage = () => (
  <>
    <h1>Strona startowa</h1>
    <Link to={routes.login}>Logowanie</Link>
  </>
);

export default MainPage;
