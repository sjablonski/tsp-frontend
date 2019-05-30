import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Circle, CircleSpan } from 'components/atoms/Circle/Circle';
import Heading from 'components/atoms/Heading/Heading';

const Wrapper = styled.div`
  padding: 0 30px 60px 0;
  display: flex;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  margin-left: 20px;
`;

const CircleInfoTile = ({ small, header, description }) => (
  <Wrapper>
    <Circle small={small}>
      <CircleSpan header>{header}</CircleSpan>
      <CircleSpan>{description}</CircleSpan>
    </Circle>
    <Content>
      <Heading regular>Twój ostatni opłacony rachunek</Heading>
      <Button color="primary">primary</Button>
    </Content>
  </Wrapper>
);

CircleInfoTile.propTypes = {
  small: PropTypes.bool,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

CircleInfoTile.defaultProps = {
  small: false,
};

export default CircleInfoTile;
