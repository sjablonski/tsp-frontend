import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.gray};
  font-size: 72px;
  margin-bottom: 0.75rem !important;

  &.active {
    color: #1abc9c;
  }
`;

const Label = styled.p`
  color: ${({ theme }) => theme.gray};

  &.active {
    color: #1abc9c;
  }
`;

const ServicesIcon = ({ service }) => {
  return (
    <>
      <StyledFontAwesomeIcon className={service.active ? 'active' : null} icon={service.icon} />
      <Label className={service.active ? 'active' : null}>{service.label}</Label>
    </>
  );
};

export default ServicesIcon;
