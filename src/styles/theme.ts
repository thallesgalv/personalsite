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

    // Perfect Fifth (base16)
    // h1: "300 7.594rem/1.3 'Poppins'",
    // h2: "400 5.063rem/1.3 'Poppins'",
    // h3: "400 3.375rem/1.3 'Poppins'",
    // h4: "400 2.25rem/1.3 'Poppins'",
    // h5: "400 1.5rem/1.3 'Poppins'",
    // base: "400 1rem/1.75 'Poppins'",

    //Perfect Fifth (base14)
    // h1: "300 7.594rem/1.3 'Poppins'",
    // h2: "400 5.063rem/1.3 'Poppins'",
    // h3: "400 3.375rem/1.3 'Poppins'",
    // h4: "400 2.25rem/1.3 'Poppins'",
    // h5: "400 1.313rem/1.3 'Poppins'",
    // base: "400 0.875rem/1.75 'Poppins'",

    //Google Material UI (base16)

    // h1: "300 6rem/normal 'Poppins'",
    // h2: "400 3.75rem/normal 'Poppins'",
    // h3: "400 3rem/normal 'Poppins'",
    // h4: "400 2.125/normal 'Poppins'",
    // h5: "400 1.5/normal 'Poppins'",
    // base: "400 1rem/normal 'Poppins'",

    //Ant-Design (base14)

    // h1: "300 5.125rem/5.625rem 'Poppins'",
    // h2: "400 4.25rem/4.75rem 'Poppins'",
    // h3: "400 3.5rem/4rem 'Poppins'",
    // h4: "400 2.875rem/3.375rem 'Poppins'",
    // h5: "400 2.25rem/2.875rem 'Poppins'",
    // base: "400 0.875/1.375rem 'Poppins'",
  },
  menuHeight: 60,
  footerHeight: 60,
  radius: 4,
  rem: (param: number) => `${param / 16}rem`
}

export default theme
