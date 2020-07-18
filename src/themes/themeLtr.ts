import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
const theme = createMuiTheme({
    direction: "ltr",
  palette: {
    primary: {
      main: lightBlue[500],
      contrastText:'white'
      
    } 
  },
});



export default theme;