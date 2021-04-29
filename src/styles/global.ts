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
  font: ${({ theme }) => theme.font.default};
  overflow-x: hidden;

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
