import styled from 'styled-components'

export const StyledHeadline = styled.h1`
  text-align: right;
`
export const RotateContainer = styled.div`
  overflow: hidden;
  height: ${({ theme }) => theme.rem(84)};
  height: ${({ theme }) => theme.rem(105)};

  > div {
    transition: all 0.5s ease-in-out;
  }
`
export const Heading = styled.h1`
  letter-spacing: -0.05em;
  font: 300 ${({ theme }) => theme.rem(84)} / ${({ theme }) => theme.rem(105)} ${({ theme }) => theme.font.primary};
`

export const Description = styled.div`
  margin: 2rem 0;
`
