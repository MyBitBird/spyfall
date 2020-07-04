import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container : {
        marginTop: '10%',
        padding: '10px',
    },
    header : {
        paddingBottom: '10px',
        borderBottom: '1px solid #777777',
        textAlign: 'center',
        color: '#777777'
    },
    copyRight : {
        paddingTop: '30px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#777777'
    },
    logo : {
        textAlign: 'center'
    },
    error : {
        color: theme.palette.secondary.main,
    }
  }));

  export default useStyles;