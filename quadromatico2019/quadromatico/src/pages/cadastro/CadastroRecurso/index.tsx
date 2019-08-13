import React from 'react';
import * as yup from 'yup';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';
import { Formik, FormikProps } from 'formik';
import Recurso from 'interfaces/entity/recurso';
import { Button, TextField } from '@material-ui/core';
import { FieldLabel, ButtonLabel } from 'constants/labels';
import { ErrorMessage } from 'constants/messages';
import TabelaRecurso from './TabelaRecurso';
import FormRecurso from './FormRecurso';

const CadastroRecurso = () => {
  const classes = useStyles();

  const validationSchema = yup.object({
    codigo: yup.string().required(ErrorMessage.CODIGO_VAZIO),
    descricao: yup.string().required(ErrorMessage.DESCRICAO_VAZIA),
  });

  const formValues: Recurso = {
    codigo: '',
    descricao: '',
    isEspacoFisico: false,
  };

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };


  return (
    <BaseCadastro title="Cadastro de recursos">
      <Formik
        onSubmit={() => { }}
        render={props => <Form {...props} />}
        initialValues={formValues}
        validationSchema={validationSchema}
      />
      <Button type="submit" variant="contained" onClick={handleClickOpen} color="primary" className="">
        {ButtonLabel.NOVO}
      </Button>
      <TabelaRecurso ></TabelaRecurso>
      <FormRecurso selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};

function Form(props: FormikProps<Recurso>) {
  const {
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
  } = props;

  const onChange = (name: keyof Recurso, e: React.ChangeEvent) => {
    e.persist();
    handleChange(e);
  };

  const onBlur = (name: keyof Recurso) => {
    setFieldTouched(name, true, true);
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
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
          name="descricao"
          label={FieldLabel.DESCRICAO}
        />

        <Button type="submit" variant="contained" color="primary" className="">
          {ButtonLabel.SALVAR}
        </Button>
      </form>
    </div>
  );
}

export default CadastroRecurso;
