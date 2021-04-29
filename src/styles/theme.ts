const theme = {
  colors: {
    primary: '#50C9EB',
    secondary: '#EB5B8A',
    background: '#22212C',
    text: '#50C9EB',
    menu: '#282A36',
    contrast: '#14141B',
    dark: '#262626'
  },
  font: {
    primary: 'Poppins',
    secondary: 'IBM Plex Mono',
    default: "400 1.25rem/1.75rem 'Poppins'",
    small: "400 0.875rem/1.25rem 'Poppins'"
  },
  menuHeight: 60,
  footerHeight: 60,
  radius: 4,
  rem: (param: number) => `${param / 16}rem`,
}

export default theme
