import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Inbox from 'components/molecules/Inbox/Inbox';

const Main = styled.main`
  margin: 48px;
`;

const Message = () => (
  <UserPageTemplate>
    <Main as="main">
      <Row className="justify-content-md-center text-center">
        <Col>
          <Heading>Ostatnie wiadomości</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <Inbox />
          <Inbox />
          <Inbox />
          <Inbox />
          <Inbox />
        </Col>
      </Row>
    </Main>
  </UserPageTemplate>
);

export default Message;
