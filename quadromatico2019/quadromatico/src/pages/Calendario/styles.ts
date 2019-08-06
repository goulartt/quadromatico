import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    width: 220,
  },
  menu: {
    width: 200,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginTop: 24,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
    fontSize: '1.5rem',
  },
}));

export default useStyles;
