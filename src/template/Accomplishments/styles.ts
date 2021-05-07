import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom:${({ theme }) => theme.rem(100)};;
`

export const Content = styled.div`
  width: 50%;
  margin: 0 auto;

  > h2 {
    font: 400 ${({ theme }) => theme.rem(36)} / ${({ theme }) => theme.rem(42)}
      'Poppins';
    margin: 1rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
    display: inline-block;
  }
`
