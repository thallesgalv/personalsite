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
`
