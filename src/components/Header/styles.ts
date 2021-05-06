import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.rem(theme.menuHeight)};
  background-color: ${({ theme }) => theme.colors.menu};
  position: fixed;
  z-index: 2;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  > nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    gap: 1rem;

    ul {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      li {
        height: 100%;

        a {
          padding: 0 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }

    > a {
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        cursor: pointer;
        font-size: ${({ theme }) => theme.rem(33)};
      }
    }
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  a,
  svg {
    height: ${({ theme }) => theme.rem(theme.menuHeight - 14)};
  }
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    > img {
      height: ${({ theme }) => theme.rem(theme.menuHeight / 2)};

      @media (max-width: 380px) {
        width: ${({ theme }) => theme.rem(25)};
        height: ${({ theme }) => theme.rem(25)};
      }
    }
  }
`
