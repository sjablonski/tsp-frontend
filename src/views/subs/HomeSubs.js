import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import CircleInfoTile from 'components/molecules/CircleInfoTile/CircleInfoTile';
import ServiceIcon from 'components/atoms/ServiceIcon/ServiceIcon';
import Inbox from 'components/molecules/Inbox/Inbox';
import LineHorizontal from 'components/atoms/LineHorizontal/LineHorizontal';

const Main = styled.main`
  margin: 48px;
`;

const services = [
  {
    icon: 'wifi',
    label: 'Internet',
    active: true,
  },
  {
    icon: 'tv',
    label: 'Telewizja',
    active: false,
  },
  {
    icon: 'mobile-alt',
    label: 'Telefon',
    active: false,
  },
];

const HomeSubs = () => (
  <UserPageTemplate>
    <Main as="main">
      <Row className="justify-content-md-center text-center">
        <Col>
          <Heading big>Witaj Jan Kowalski</Heading>
          <CircleInfoTile header="50,00zł" label="Saldo" description="Twóje aktualne saldo" />
        </Col>
      </Row>
      <LineHorizontal as="hr" />
      <Row className="text-center">
        <Col md="6">
          <Heading>Rachunki i płatności</Heading>
          <CircleInfoTile
            small
            header="50,00zł"
            label="Kwiecień 2019"
            description="Twóje ostatni opłacony rachunek"
          />
        </Col>
        <Col md="6" className="mt-5 pt-3 pt-md-0 mt-md-0 border-xs-top border-sm-left">
          <Col>
            <Heading>Aktywne usługi</Heading>
          </Col>
          <Row className="justify-content-md-center">
            {services.map(service => (
              <Col lg="3" key={service.label}>
                <ServiceIcon service={service} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <LineHorizontal as="hr" />
      <Row>
        <Col>
          <Heading className="text-center m-0">Ostatnie wiadomości</Heading>
          <Inbox />
        </Col>
      </Row>
    </Main>
  </UserPageTemplate>
);

export default HomeSubs;
