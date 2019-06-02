import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.blue};
  margin-bottom: 32px;
`;

export default Heading;
