import styled from 'styled-components'

export const StyledFooter = styled.footer`
  height: ${({ theme }) => theme.rem(theme.footerHeight)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.menu};
  display: grid;
  place-content: center;

  >article {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ContainerIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
`
