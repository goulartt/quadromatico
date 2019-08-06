import React, { FunctionComponent } from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import { ButtonLabel } from 'constants/labels';
import { FormikProps, Formik } from 'formik';
import MuiIcon from 'components/MuiIcon';

interface propsBaseCadastro {
  title: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formComponent: FunctionComponent<FormikProps<any>>;
  formValues: any;
  validationSchema: any;
}

const BaseCadastro: FunctionComponent<propsBaseCadastro> = props => {
  const classes = useStyles();

  const { title, onSubmit, formComponent, formValues, validationSchema } = props;

  const FormComponent = formComponent;

  return (
    <div className={classes.container}>
      <Paper className={classes.paperContainer}>
        <div className={classes.paperTitleContainer}>
          <Typography variant="h5" component="h3" className={classes.paperTitle}>
            {title}
          </Typography>
          <Button color="primary" className={classes.newButton}>
            <MuiIcon icon="MdAdd" />
            {ButtonLabel.NOVO}
          </Button>
        </div>
        <div className={classes.formContainer}>
          <Formik
            onSubmit={onSubmit}
            render={props => (
              <FormComponent {...props}>
                <div className={classes.formButtons}>
                  <Button type="submit" variant="contained" color="primary">
                    {ButtonLabel.SALVAR}
                  </Button>
                  <Button variant="contained" color="secondary">
                    {ButtonLabel.CANCELAR}
                  </Button>
                </div>
              </FormComponent>
            )}
            initialValues={formValues}
            validationSchema={validationSchema}
          />
        </div>
      </Paper>
    </div>
  );
};

export default BaseCadastro;
