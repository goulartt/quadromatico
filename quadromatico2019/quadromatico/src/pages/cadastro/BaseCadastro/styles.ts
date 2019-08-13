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
    height: '40px',
    borderBottom: '1px #e3e1e1 solid',
  },
  paperTitle: {
    margin: '8px 0 0 8px',
  },
  formContainer: {
    padding: '0 0 0 8px',
  },
}));

export default useStyles;
