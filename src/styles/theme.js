import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: 'rgb(153 187 135)',
      dark: 'rgb(135 187 156)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8fd9cd',
      main: '#3c0b0b',
      dark: 'rgb(35 35 36)',
      contrastText: '#fff',
      fontWeight: '700'
    },
    tertiary: {
        light: '#629749',
        main: '#fff',
        dark: '#003d00',
        contrastText: '#000',
        fontWeight: '700'
      },
  },
  screen: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
  },
});

console.log(theme);

export default theme