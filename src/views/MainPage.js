import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import CircleInfoTile from 'components/molecules/CircleInfoTile/CircleInfoTile';

const MainPage = () => (
  <>
    <h1>Strona startowa</h1>
    <Link to={routes.login}>Logowanie</Link>
    <CircleInfoTile header="50,00 zł" description="Kwiecień 2019" />
  </>
);

export default MainPage;
