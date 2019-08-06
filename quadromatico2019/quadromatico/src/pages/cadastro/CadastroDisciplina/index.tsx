import React, { FunctionComponent } from 'react';
import * as yup from 'yup';
import BaseCadastro from '../BaseCadastro';
import { FormikProps } from 'formik';

const CadastroDisciplina = () => {
  return (
    <BaseCadastro
      title="Cadastro de disciplinas"
      onSubmit={() => {}}
      formComponent={Form}
      formValues={{}}
      validationSchema={{}}
    />
  );
};

const Form: FunctionComponent<FormikProps<any>> = props => {
  return <div />;
};

export default CadastroDisciplina;
