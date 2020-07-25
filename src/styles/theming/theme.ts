import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#337066',
      main: '#004d40',
      dark: '#00352c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d0e7b7',
      main: '#c5e1a5',
      dark: '#899d73',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: `'Montserrat', sans- serif`,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 600
  }
});

export default theme;