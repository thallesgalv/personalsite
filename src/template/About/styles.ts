import styled from 'styled-components'

export const Container = styled.section`
  h2 {
    margin-top: 0;

    @media (max-width: 767px) {
      text-align: center;
      margin-top: 2rem;
    }
  }
`

export const Box = styled.section`
  display: grid;
  grid-template-columns: minmax(360px, 600px) minmax(360px, 700px);
  justify-content: center;
  place-items: center;
  gap: 2rem;
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 0;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    position: absolute;

    opacity: 0;
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translate3d(50%, 0, 0);
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
      transform: translate3d(15px, 0, 0);
    }

    @media (max-width: 767px) {
      position: unset;
      margin-top: 2rem;
    }

    &.active {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

export const Content = styled.article`
  /* width: max(35%, 600px); */

  opacity: 0;
  transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translate3d(-50%, 0, 0);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    transform: translate3d(-15px, 0, 0);
  }

  &.active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  p + p {
    margin-top: 1.75rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    text-decoration: underline;
  }
`
