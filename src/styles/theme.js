import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0477C1',
      main: '#014a79',
      dark: '#00253E',
      contrastText: '#fff',
    },
    secondary: {
      light: '#556B2F',
      main: '#41571A',
      dark: '#283B08',
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