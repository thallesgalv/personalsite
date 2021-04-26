const theme = {
  colors: {
    primary: '#50C9EB',
    secondary: '#EB5B8A',
    background: '#22212C',
    text: '#50C9EB',
    menu: '#282A36',
    contrast: '#14141B',
  },
  font: {
    primary: 'Poppins',
    secondary: 'IBM Plex Mono',
  },
  menuHeight: 60,
  footerHeight: 60,
  radius: 4,
  rem: (param: number) => `${param / 16}rem`,
}

export default theme
