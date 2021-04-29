import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.rem(theme.menuHeight)};
  background-color: ${({ theme }) => theme.colors.menu};
  position: fixed;
  z-index: 2;
`
