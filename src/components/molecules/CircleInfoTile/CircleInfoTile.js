import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { Circle, CircleSpan } from 'components/atoms/Circle/Circle';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  padding: 0 0 48px 0;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const Content = styled.div`
  margin-left: 20px;
`;

const CircleInfoTile = ({ small, header, label, description }) => (
  <Wrapper>
    <Circle small={small}>
      <CircleSpan header>{header}</CircleSpan>
      <CircleSpan>{label}</CircleSpan>
    </Circle>
    <Content>
      <Paragraph small={small} className="mb-4">
        {description}
      </Paragraph>
      <Button emerald>Sprawdź</Button>
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
