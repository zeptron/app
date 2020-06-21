import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffaf4c',
      main: '#f47e17',
      dark: '#bb5000',
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