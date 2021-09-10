module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:theme => ({
        'hero-pattern': "url('/images/girl on phone.jpeg')"
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
