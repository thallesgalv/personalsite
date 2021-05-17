import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const StyledButton = styled.button<ButtonProps>`
  outline: 0;
  padding: .75rem 1rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.rem(theme.radius)};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
  font: ${({ theme }) => theme.font.base};
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  a {
    color: ${({ theme }) => theme.colors.dark};
  }

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.7;

      a {
        color: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        opacity: 1;
      }
    `}

  ${({ small }) =>
    small &&
    css`
      font: ${({ theme }) => theme.font.small};
      padding: 0.5rem;
      font-weight: 400;
    `}
`
