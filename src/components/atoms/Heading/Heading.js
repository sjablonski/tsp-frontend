import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme, regular }) => (regular ? theme.regular : theme.bold)};
`;

export default Heading;
