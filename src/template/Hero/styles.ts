import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: min(700px, 40%) 1fr;
  place-items: flex-end;

  @media (max-width: 1081px) {
    grid-template-columns: 1fr;
    place-items: center;
  }

  > img {
    position: relative;
    z-index: 1;
    align-self: flex-end;

    @media (max-width: 1100px) {
      order: 1;
      width: 60%;
      margin-right: auto;
      margin-bottom: auto;
    }

    @media (max-width: 767px) {
      width: 100%;
      margin: unset;
    }
  }
`
export const Content = styled.div`
  position: relative;
  z-index: 1;
  padding-right: 4rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 1081px) {
    align-items: center;
    padding-right: 0;
  }

  @media (max-width: 1079px) {
    margin-top: ${({ theme }) => theme.rem(theme.menuHeight + 20)};
  }
  @media (max-width: 767px) {
    padding: 0 1rem;
    margin-top: ${({ theme }) => theme.rem(theme.menuHeight + 40)};
  }

  svg {
    height: 13vw;

    @media (max-width: 1400px) {
      height: 150px;
    }
    @media (max-width: 1079px) {
      display: none;
    }
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1081px) and (max-width: 1500px) {
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
