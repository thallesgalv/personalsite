import styled from 'styled-components'

export const Container = styled.section`
  /* width: 100%; */
  min-height: 100vh;
  margin: 0 4rem;
  position: relative;

  @media (max-width: 767px) {
    margin: 0 1rem;
  }
`

export const Content = styled.div`
  position: absolute;
  right: 0;
  top: 40%;
`
export const Flex = styled.div`
position: absolute;
right: 0;
display: flex;
justify-content: center;
align-items: center;

button + button {
  margin-left: 1rem;
}
`
