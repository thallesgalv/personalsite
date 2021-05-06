import styled from 'styled-components'

export const Container = styled.div``

export const ContainerCards = styled.div`
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  > div {
    &:last-child {
      margin-bottom: 0;
    }
  }
`
