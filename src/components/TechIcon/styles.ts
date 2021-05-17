import styled, { css } from 'styled-components'
import { TechIconCssProps } from '.'

export const Wrapper = styled.li<TechIconCssProps>`
  width: ${({ small }) => (small ? '4rem' : '6.25rem')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > small {
    font-size: ${({ small }) => (small ? '0.75rem' : '1rem')};
    line-height: ${({ small }) => (small ? '1rem' : '1.5rem')};
    font-weight: 200;
    text-align: center;

    /*
    overflow: hidden;
    text-overflow: ellipsis; */
  }
`
export const Container = styled.div<TechIconCssProps>`
  width: 100%;
  height: ${({ small }) => (small ? '4rem' : '6.25rem')};
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.rem(theme.radius)};
  margin-bottom: 10px;

   svg {
    font-size: ${({ small }) => (small ? '2.5rem' : '4.68rem')} !important;
  }
`
