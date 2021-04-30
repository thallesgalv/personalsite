import styled, { css } from 'styled-components'
import { TechIconCssProps } from '.'

export const Wrapper = styled.div<TechIconCssProps>`
  width: ${({ small }) => small ? '2.75rem' : '6.25rem'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > p {
    margin-top: ${({ theme }) => theme.rem(5)};
    font-size: ${({ small }) => small ? '0.875rem' : '1.25rem'};
    line-height: ${({ small }) => small ? '1.25rem' : '1.75rem'};
    font-weight: 200;
  }
`
export const Container = styled.div<TechIconCssProps>`
  width: 100%;
  height: ${({ small }) => small ? '2.75rem' : '6.25rem'};
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.rem(theme.radius)};

  > img {
    width: ${({ small }) => small ? '2rem' : '4.68rem'};
  }
`
