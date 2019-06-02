import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import { Circle, CircleSpan } from 'components/atoms/Circle/Circle';
import Bill from 'components/molecules/Bill/Bill';
import LineHorizontal from 'components/atoms/LineHorizontal/LineHorizontal';

const Main = styled.main`
  margin: 48px;
`;

const Payment = () => (
  <UserPageTemplate>
    <Main as="main">
      <Row className="justify-content-md-center text-center">
        <Col>
          <Heading>Moje płatności</Heading>
          <Circle small>
            <CircleSpan header>50,00zł</CircleSpan>
            <CircleSpan>Saldo</CircleSpan>
          </Circle>
        </Col>
      </Row>
      <LineHorizontal as="hr" />
      <Row>
        <Col>
          <Heading className="text-center m-0">Lista rachunków do opłaty</Heading>
          <Bill />
          <Bill />
        </Col>
      </Row>
    </Main>
  </UserPageTemplate>
);

export default Payment;
