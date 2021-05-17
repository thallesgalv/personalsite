import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 100%;
  }

  body, p, span, a, h1, h2, h3, ul, img  {
    display: block;
    font-weight: normal;

    a {
      text-decoration: none;
    }

    img {
      max-width: 100%;
    }

    li {
      list-style: none;
    }
  }

body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow-x: hidden;
  font: ${({ theme }) => theme.font.base};

  h1 {
    font: 300 ${({ theme }) => theme.rem(84)} / ${({ theme }) =>
  theme.rem(105)} ${({ theme }) => theme.font.primary};
  }
  h2 {
    font: ${({ theme }) => theme.font.h2};
  }
  h3 {
    font: ${({ theme }) => theme.font.h3};
  }
  h4 {
    font: ${({ theme }) => theme.font.h4};
  }
  h5 {
    font: ${({ theme }) => theme.font.h5};
  }
  /* p, li {
    font: ${({ theme }) => theme.font.base};
  } */


  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
}
`
