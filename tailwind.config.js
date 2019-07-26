const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

module.exports = {
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1060px'
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.500', 'currentColor')
    }),
    colors: {
      white: {
        default: '#ffffff',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#FFFFFF',
        500: '#FFFFFF',
        600: '#E6E6E6',
        700: '#999999',
        800: '#737373',
        900: '#4D4D4D'
      },
      black: {
        default: '#000000',
        100: '#E6E6E6',
        200: '#BFBFBF',
        300: '#999999',
        400: '#4D4D4D',
        500: '#000000',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000'
      },
      gray: {
        default: '#C9C6C6',
        100: '#FAF9F9',
        200: '#F2F1F1',
        300: '#E9E8E8',
        400: '#D9D7D7',
        500: '#C9C6C6',
        600: '#B5B2B2',
        700: '#797777',
        800: '#5A5959',
        900: '#3C3B3B'
      },
      green: {
        default: '#1DE278',
        100: '#E8FCF2',
        200: '#C7F8DD',
        300: '#A5F3C9',
        400: '#61EBA1',
        500: '#1DE278',
        600: '#1ACB6C',
        700: '#118848',
        800: '#0D6636',
        900: '#094424'
      },
      red: {
        default: '#F24E33',
        100: '#FEEDEB',
        200: '#FCD3CC',
        300: '#FAB8AD',
        400: '#F68370',
        500: '#F24E33',
        600: '#DA462E',
        700: '#912F1F',
        800: '#6D2317',
        900: '#49170F'
      }
    },
    fontFamily: false,
    extend: {
      container: {
        center: true,
        padding: '1.5rem'
      },
      boxShadow: theme => ({
        outline: '0 0 0 3px rgba(201, 198, 198,0.5)',
        'green-outline': `0 0 0 3px rgba(${
          hexToRgb(theme('colors.green.500', 'currentColor')).r
        }, ${hexToRgb(theme('colors.green.500', 'currentColor')).g}, ${
          hexToRgb(theme('colors.green.500', 'currentColor')).b
        }, 0.5)`
      })
    }
  },
  variants: {},
  plugins: []
};
