import React, { FunctionComponent } from 'react';
import * as yup from 'yup';
import BaseCadastro from '../BaseCadastro';
import { Formik, FormikProps } from 'formik';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const CadastroDisciplina = () => {
  const classes = useStyles();

  return (
    <BaseCadastro
      title="Cadastro de Disciplinas">

      <Formik
        onSubmit={() => { }}
        render={props => <Form {...props} />}
        initialValues={{}}
        validationSchema={{}}
      />

      <Button variant="contained" color="primary" className={classes.button}>
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      
    </BaseCadastro >
  );
};

const Form: FunctionComponent<FormikProps<any>> = props => {
  return <div />;
};

export default CadastroDisciplina;
