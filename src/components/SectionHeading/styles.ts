import styled from 'styled-components'

export const Container = styled.div`
  /* padding-top: 2rem;
  padding-bottom: 4rem; */
`

export const Content = styled.div`
  > h3 {
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
    /* font: 400 ${({ theme }) => theme.rem(48)} / ${({ theme }) =>
      theme.rem(48)}
      'Poppins'; */
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;

    /* @media (max-width: 767px) {
      font: 400 ${({ theme }) => theme.rem(40)} / ${({ theme }) =>
      theme.rem(48)}
      'Poppins';
    } */

    > span {
      border-radius: 50%;
      height: ${({ theme }) => theme.rem(50)};
      width: ${({ theme }) => theme.rem(50)};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      display: flex;
      justify-content: center;
      align-items: center;
      font: 600 ${({ theme }) => theme.rem(24)} /
        ${({ theme }) => theme.rem(32)} 'Poppins';
      margin-right: 1rem;
      position: relative;

      &::after {
        content: '';
        background: linear-gradient(
          180deg,
          rgba(235, 91, 138, 0) 0%,
          #eb5b8a 100%
        );
        height: ${({ theme }) => theme.rem(200)};
        width: ${({ theme }) => theme.rem(3)};
        position: absolute;
        top: ${({ theme }) => theme.rem(-210)};
      }
    }
  }
`
