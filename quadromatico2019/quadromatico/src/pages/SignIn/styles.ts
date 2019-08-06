import { makeStyles } from '@material-ui/core/styles';
import LogoUnifil from 'assets/images/unifil-logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${LogoUnifil})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '360px',
    backgroundPosition: 'center',
    backgroundColor: '#ff6200',
  },
  paper: {
    margin: '34% 6%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  snackBar: {
    margin: `${theme.spacing(1, 0, 2)} !important`,
  },
  submit: {
    margin: `${theme.spacing(2, 0, 3)} !important`,
  },
  error: {
    backgroundColor: `${theme.palette.error.dark} !important`,
  },
  iconWarning: {
    margin: theme.spacing(0, 1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
