import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
  }
`

export const Content = styled.div`
    color: ${({ theme }) => theme.colors.secondary};
    display: grid;
    grid-template-columns: 50px 1fr;
    justify-content: center;
    place-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }

  > h3 {
    text-transform: uppercase;
    line-height: normal;
    text-align: center;
    }
  }

  > span {
      border-radius: 50%;
      height: ${({ theme }) => theme.rem(50)};
      width: ${({ theme }) => theme.rem(50)};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      display: flex;
      justify-content: center;
      align-items: center;
      font: ${({ theme }) => theme.font.h5};
      position: relative;

      @media (max-width: 767px) {
        font: ${({ theme }) => theme.font.subheadline};
      }


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

        @media (max-width: 767px) {
          width: ${({ theme }) => theme.rem(2)};
          height: ${({ theme }) => theme.rem(100)};
          top: ${({ theme }) => theme.rem(-110)};
        }
      }
`
