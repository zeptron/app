import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#42585f',
      main: '#253337',
      dark: '#161e21',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgb(160 220 230)',
      main: '#21a8bd',
      dark: '#218292',
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