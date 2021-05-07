import styled from 'styled-components'

export const StyledFooter = styled.footer`
  height: ${({ theme }) => theme.rem(theme.footerHeight)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.menu};
  display: grid;
  place-content: center;

  >div {
    display: flex;
  }
`

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
`
