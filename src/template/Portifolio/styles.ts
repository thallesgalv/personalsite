import styled from 'styled-components'

export const Container = styled.article`
  padding: 0 4rem;
  padding-top: 30rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1100px) {
    padding-top: 0;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 4rem;
  }
  @media (max-width: 380px) {
    padding-top: 5rem;
  }

  > p {
    max-width: 400px;

    @media (max-width: 1100px) {
      max-width: unset;
      text-align: center;
    }
  }

  >h2 {
    @media (max-width: 1100px) {
      text-align: center;
    }
  }
`

export const ContainerCards = styled.ul``
