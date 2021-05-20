import { AppProps } from 'next/app'
import { EnglishContextProvider } from '../contexts/EnglishContext'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <EnglishContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </EnglishContextProvider>
  )
}

export default MyApp
