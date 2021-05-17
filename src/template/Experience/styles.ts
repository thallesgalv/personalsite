import styled from 'styled-components'

export const Container = styled.section``

export const ContainerCards = styled.ul`
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  > li {
    &:last-child {
      margin-bottom: 0;
    }
  }



  /* > p {
    max-width: 400px;

    @media (max-width: 1100px) {
      max-width: unset;
      text-align: center;
    }
  }

  > h1 {
    @media (max-width: 1100px) {
      text-align: center;
    }
  } */
`
