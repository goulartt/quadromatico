import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  logoUnifil: {
    width: '10rem',
    marginRight: '5rem',
  },
}));

export default useStyles;
