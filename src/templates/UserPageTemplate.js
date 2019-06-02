import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Navbar from 'components/organisms/NavigationBar/NavigationBar';

const Header = styled.header`
  background: ${({ theme }) => theme.blue};
  padding: 24px;
`;

const UserPageTemplate = ({ children }) => (
  <>
    <Header as="header">
      <Container>
        <Navbar />
      </Container>
    </Header>
    <Container>{children}</Container>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
