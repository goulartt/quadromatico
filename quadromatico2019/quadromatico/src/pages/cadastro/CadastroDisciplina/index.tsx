import React, { FunctionComponent } from 'react';
import * as yup from 'yup';
import BaseCadastro from '../BaseCadastro';
import { Formik, FormikProps } from 'formik';

const CadastroDisciplina = () => {
  return (
    <BaseCadastro
      title="Cadastro de Disciplinas">

      <Formik
        onSubmit={() => { }}
        render={props => <Form {...props} />}
        initialValues={{}}
        validationSchema={{}}
      />
    </BaseCadastro >
  );
};

const Form: FunctionComponent<FormikProps<any>> = props => {
  return <div />;
};

export default CadastroDisciplina;
