import React, { FunctionComponent } from 'react';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

interface propsBaseCadastro {
  title: string;
}

const BaseCadastro: FunctionComponent<propsBaseCadastro> = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paperContainer}>
        <div className={classes.paperTitleContainer}>
          <Typography
            variant="h5"
            component="h3"
            className={classes.paperTitle}
          >
            {props.title}
          </Typography>
        </div>
        <div className={classes.formContainer}>{props.children}</div>
      </Paper>
    </div>
  );
};

export default BaseCadastro;
