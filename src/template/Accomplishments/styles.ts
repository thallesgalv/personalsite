import styled from 'styled-components'

export const Container = styled.section`
  padding-bottom: ${({ theme }) => theme.rem(100)};
`

export const Content = styled.article`
  width: 50%;
  margin: 4rem auto;

  @media (max-width: 767px) {
    width: 100%;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  > h4 {
    margin: 1rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
    display: inline-block;
  }
`
