import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    margin-top: 0;
  }
`

export const Box = styled.div`
  display: grid;
  grid-template-columns: minmax(360px, 600px) minmax(360px, 700px);
  justify-content: center;
  place-items: center;
  gap: 2rem;
  padding: 0 4rem;

  @media (max-width: 767px) {
    padding: 0 1rem;
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
  }
`

export const Content = styled.div`
  /* width: max(35%, 600px); */

  p + p {
    margin-top: 1.75rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }
`
