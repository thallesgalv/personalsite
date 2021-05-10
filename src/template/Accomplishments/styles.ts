import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: ${({ theme }) => theme.rem(100)};

  /* opacity: 0;
  transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translate3d(0, -50px, 0);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.active {
    opacity: 1;
    transform: translate3d(0, 0, 0); */
`

export const Content = styled.div`
  width: 50%;
  margin: 4rem auto;

  @media (max-width: 767px) {
    margin: 2rem auto;
  }

  > h2 {
    font: 400 ${({ theme }) => theme.rem(36)} / ${({ theme }) => theme.rem(42)}
      'Poppins';
    margin: 1rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
    display: inline-block;
  }
`
