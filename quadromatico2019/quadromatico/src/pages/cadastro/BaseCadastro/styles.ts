import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  paperContainer: {
    marginTop: '24px',
    width: '96%',
  },
  paperTitleContainer: {
    width: '100%',
    height: '40px'
  },
  paperTitle: {
    margin: theme.spacing(1),
  },
  formContainer: {
    padding: '0 0 0 8px',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  buttonNew: {
    margin: theme.spacing(1),
    marginLeft: '90%',
  },
  root: {
    flexGrow: 1,
  },

}));

export default useStyles;
