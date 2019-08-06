import React, { FunctionComponent } from 'react';
import * as yup from 'yup';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';
import { Formik, FormikProps } from 'formik';
import Recurso from 'interfaces/entity/recurso';
import { Button, TextField } from '@material-ui/core';
import { FieldLabel, ButtonLabel } from 'constants/labels';
import { ErrorMessage } from 'constants/messages';

const CadastroRecurso = () => {
  const validationSchema = yup.object({
    codigo: yup.string().required(ErrorMessage.CODIGO_VAZIO),
    descricao: yup.string().required(ErrorMessage.DESCRICAO_VAZIA),
  });

  const formValues: Recurso = {
    codigo: '',
    descricao: '',
    isEspacoFisico: false,
  };

  return (
    <BaseCadastro
      title="Cadastro de recursos"
      onSubmit={() => {}}
      formComponent={Form}
      formValues={formValues}
      validationSchema={validationSchema}
    />
  );
};

const Form: FunctionComponent<FormikProps<Recurso>> = props => {
  const { errors, touched, handleSubmit, handleChange, setFieldTouched } = props;
  const classes = useStyles();

  const onChange = (name: keyof Recurso, e: React.ChangeEvent) => {
    e.persist();
    handleChange(e);
  };

  const onBlur = (name: keyof Recurso) => {
    setFieldTouched(name, true, true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        helperText={touched.codigo ? errors.codigo : ''}
        error={touched.codigo && !!errors.codigo}
        onChange={e => onChange('codigo', e)}
        onBlur={() => onBlur('codigo')}
        margin="normal"
        name="codigo"
        label={FieldLabel.CODIGO + '*'}
      />
      <TextField
        variant="outlined"
        margin="normal"
        helperText={touched.descricao ? errors.descricao : ''}
        error={touched.descricao && !!errors.descricao}
        onChange={e => onChange('descricao', e)}
        onBlur={() => onBlur('descricao')}
        name="descricao"
        label={FieldLabel.DESCRICAO}
      />

      {props.children}
    </form>
  );
};

export default CadastroRecurso;
