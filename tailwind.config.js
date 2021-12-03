module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#191919',
        'secondary-color': '#525252',
        'primary-brand-color': '#1ea4ce',
        'secondary-brand-color': '#147594',
        'gray-color': '#697488',
        'background-color': '#e5e5e5',
        'white-color': '#ffffff',
        'text-title': '#6F6F6F',
      },
      spacing: {
        'header-height': '76.64px',
        'besket-height': '129px',
        'layout-width': '296px',
        '60px': '60px',
        '30px': '30px',
        '296px': '296px',
        '274px': '274px',
        '92px': '92px',
        '124px': '124px',
        '225px': '225px',
        '1400px': '1400px',
        '300px': '300px',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '18': '18px',
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1232px',
          },
        },
      })
    },
  ],
}
