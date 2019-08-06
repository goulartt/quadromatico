import React from 'react';
import * as yup from 'yup';
import { Formik, FormikProps } from 'formik';
import clsx from 'clsx';

import { useDispatch, useSelector } from 'react-redux';

import { Auth } from 'store/auth/types';
import { signInRequest } from 'store/auth/actions';

import useStyles from './styles';
import {
  Grid,
  CssBaseline,
  Paper,
  Avatar,
  TextField,
  Button,
  Box,
  SnackbarContent,
} from '@material-ui/core';
import { MdLockOutline, MdWarning } from 'react-icons/md';
import { ApplicationState } from 'store';
import { ErrorMessage } from 'constants/messages';
import { ButtonLabel, FieldLabel } from 'constants/labels';

function SignIn() {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    login: yup.string().required(ErrorMessage.USUARIO_VAZIO),
    senha: yup.string().required(ErrorMessage.SENHA_VAZIA),
  });

  const formValues: Auth = { login: '', senha: '' };

  function handleSubmit(data: Auth) {
    dispatch(signInRequest(data));
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      render={props => <Form {...props} />}
      initialValues={formValues}
      validationSchema={validationSchema}
    />
  );
}

function Form(props: FormikProps<Auth>) {
  const state = useSelector(({ auth }: ApplicationState) => ({
    authFailed: auth.authFailed,
  }));

  const classes = useStyles();

  const {
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
  } = props;

  const onChange = (name: keyof Auth, e: React.ChangeEvent) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, true);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MdLockOutline />
          </Avatar>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              helperText={touched.login ? errors.login : ''}
              error={touched.login && !!errors.login}
              onChange={onChange.bind(null, 'login')}
              fullWidth
              id="login"
              label={FieldLabel.USUARIO}
              name="login"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              helperText={touched.senha ? errors.senha : ''}
              error={touched.senha && !!errors.senha}
              onChange={onChange.bind(null, 'senha')}
              fullWidth
              name="senha"
              label={FieldLabel.SENHA}
              type="password"
            />

            {state.authFailed ? (
              <SnackbarContent
                className={clsx(classes.error, classes.snackBar)}
                aria-describedby="client-snackbar"
                message={
                  <span id="client-snackbar" className={classes.message}>
                    <MdWarning className={classes.iconWarning} />
                    {ErrorMessage.LOGIN_SENHA_INCORRETOS}.
                  </span>
                }
              />
            ) : (
              ''
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {ButtonLabel.ENTRAR}
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignIn;
