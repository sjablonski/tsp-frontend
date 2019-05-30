import styled, { css } from 'styled-components';

export const CircleSpan = styled.span`
  position: absolute;
  top: ${({ header }) => (header ? '40%' : '60%')};
  transform: translate(-50%, -50%);
  width: 130px;
`;

export const Circle = styled.div`
  background: none;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  text-align: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.blue};
  font-weight: ${({ theme }) => theme.light};

  ${({ small, theme }) =>
    small &&
    css`
      width: 128px;
      height: 128px;
      font-size: ${() => (small ? theme.fontSize.s : theme.fontSize.m)};
    `}

  > {
    &:first-child {
      ${({ small, theme }) => css`
        font-size: ${() => (small ? theme.fontSize.l : theme.fontSize.xl)};
        font-weight: ${() => theme.regular};
      `}
    }
  }
`;
