import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import { Circle, CircleSpan } from 'components/atoms/Circle/Circle';
import LastBills from 'components/molecules/LastBills/LastBills';
import LastBillsLabel from 'components/molecules/LastBills/LastBillsLabel';
import LineHorizontal from 'components/atoms/LineHorizontal/LineHorizontal';
import BarChart from 'components/molecules/BarChart/BarChart';

const Main = styled.main`
  margin: 48px;
`;

const PaymentHistory = () => (
  <UserPageTemplate>
    <Main as="main">
      <Row className="justify-content-md-center text-center">
        <Col>
          <Heading>Historia płatności</Heading>
          <Circle small>
            <CircleSpan header>50,00zł</CircleSpan>
            <CircleSpan>Kwiecień 2019</CircleSpan>
          </Circle>
        </Col>
      </Row>
      <LineHorizontal as="hr" />
      <BarChart />
      <LineHorizontal as="hr" />
      <Row>
        <Col>
          <Heading className="text-center m-0">Ostatnie rachunki</Heading>
          <LastBillsLabel />
          <LastBills />
        </Col>
      </Row>
    </Main>
  </UserPageTemplate>
);

export default PaymentHistory;
