import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, small }) => (small ? theme.fontSize.s : theme.fontSize.m)};
  font-weight: ${({ theme, regular }) => (regular ? theme.regular : theme.light)};
  color: ${({ theme }) => theme.gray};
`;

export default Paragraph;
