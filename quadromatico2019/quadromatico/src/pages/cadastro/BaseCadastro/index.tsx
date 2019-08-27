import React, { FunctionComponent } from 'react';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';
import { Button, TextField } from '@material-ui/core';
import { ButtonLabel } from 'constants/labels';
import { Add } from '@material-ui/icons';

interface propsBaseCadastro {
  title: string;
  handleClick: () => void;
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
        <div  >
          <Button type="submit" variant="contained" onClick={props.handleClick} className={classes.buttonNew}>
            {ButtonLabel.NOVO}
            <Add className={classes.rightIcon}></Add>
          </Button>
          {props.children}
        </div>

      </Paper>

    </div>
  );
};

export default BaseCadastro;
