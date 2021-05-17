import styled from 'styled-components'

export const StyledHeadline = styled.div`
  text-align: right;

  @media (max-width: 1100px) {
    text-align: center;
  }
`
export const RotateContainer = styled.div`
  overflow: hidden;
  height: ${({ theme }) => theme.rem(105)};

  @media (max-width: 1100px) {
    height: ${({ theme }) => theme.rem(88)};
  }
  @media (max-width: 767px) {
    height: ${({ theme }) => theme.rem(48)};
  }
  @media (max-width: 400px) {
    height: ${({ theme }) => theme.rem(48)};
  }

  > div {
    transition: all 0.5s ease-in-out;
  }
`
export const Heading = styled.h1`
  letter-spacing: -0.05em;

  @media (max-width: 1100px) {
    font: 300 ${({ theme }) => theme.rem(72)} / ${({ theme }) => theme.rem(88)} ${({ theme }) => theme.font.primary};
  }

  @media (max-width: 767px) {
    font: 300 ${({ theme }) => theme.rem(38)} / ${({ theme }) => theme.rem(48)} ${({ theme }) => theme.font.primary};
  }
  @media (max-width:400px) {
    font: 300 ${({ theme }) => theme.rem(34)} / ${({ theme }) => theme.rem(48)} ${({ theme }) => theme.font.primary};
  }
`

export const Description = styled.div`
  margin: 2rem 0;
  font: ${({ theme }) => theme.font.subheadline};

  @media (max-width: 767px) {
    font: ${({ theme }) => theme.font.base};
    width: 70%;
    margin: 2rem auto;
  }
`
