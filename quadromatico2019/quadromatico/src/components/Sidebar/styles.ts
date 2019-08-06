import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '4vh',
  },
  grow: {
    flexGrow: 1,
  },
  list: {
    width: 250,
    '& a, & a:link, & a:active': {
      textDecoration: 'none',
      fontSize: '1em',
      fontFamily: 'Roboto',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    '& .MuiListItemText-inset': {
      paddingLeft: 12,
    },
  },
  listIcon: {
    fontSize: '1.55rem',
    paddingLeft: '0.6rem',
  },
}));

export default useStyles;
