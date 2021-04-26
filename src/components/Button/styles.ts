import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const StyledButton = styled.button<ButtonProps>`
  outline: 0;
  padding: 1rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.rem(theme.radius)};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
  font: ${({ theme }) => theme.font.default};
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    `}
`
