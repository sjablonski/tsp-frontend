import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 24px;
  padding: 0.375rem 1.25rem;
  color: #fff;
  ${({ theme }) => css`
    background: ${() => theme.blue};
    border: 1px solid ${() => theme.blue};
    :focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    }
    :hover {
      background: ${() => theme.blueDark};
      border: 1px solid ${() => theme.blueDark};
    }
  `}

  ${({ emerald, theme }) =>
    emerald &&
    css`
      background: ${() => theme.emeral};
      border-color: ${() => theme.emeral};
    `}
`;

export default Button;
