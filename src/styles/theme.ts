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

    //Tailwind (base16)
    h1: "300 6rem/1 'Poppins'",
    h2: "400 4.5rem/1 'Poppins'",
    h3: "400 3rem/1 'Poppins'",
    h4: "400 2.25rem/2.5rem 'Poppins'",
    h5: "400 1.875rem/2.25rem 'Poppins'",
    base: "400 1rem/1.5 'Poppins'",
    subheadline: "400 1.25rem/1.75 'Poppins'",
    small: "400 0.875rem/1.25rem 'Poppins'"
  },
  menuHeight: 60,
  footerHeight: 60,
  radius: 4,
  rem: (param: number) => `${param / 16}rem`
}

export default theme
