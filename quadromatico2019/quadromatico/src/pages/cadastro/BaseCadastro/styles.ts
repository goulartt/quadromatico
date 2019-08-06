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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '48px',
    borderBottom: '1px #e3e1e1 solid',
  },
  paperTitle: {
    marginLeft: '8px',
  },
  formContainer: {
    position: 'relative',
    padding: '0 0 0 8px',
    '& .MuiInputBase-root': {
      marginRight: '8px',
    },
  },
  formButtons: {
    '& button': {
      float: 'right',
      marginBottom: '8px',
      marginRight: '8px',
    },
  },
  newButton: {
    marginRight: '8px',
    fontSize: '1rem',
  },
}));

export default useStyles;
