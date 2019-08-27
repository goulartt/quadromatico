import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Recurso from 'interfaces/entity/recurso';
import { FieldLabel, ButtonLabel } from 'constants/labels';
import { ErrorMessage } from 'constants/messages';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Formik, FormikProps } from 'formik';
import { blue } from '@material-ui/core/colors';
import * as yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

interface FormRecursoProps {
  open: boolean;
  selectedValue: Recurso | undefined;
  onClose: (value: Recurso | undefined) => void;
}

export default function FormRecurso(props: FormRecursoProps) {
  const { onClose, selectedValue, open } = props;
  const formValues: Recurso = {
    codigo: selectedValue ? selectedValue.codigo : '',
    descricao: selectedValue ? selectedValue.descricao : '',
    isEspacoFisico: selectedValue ? selectedValue.isEspacoFisico : false,
  };

  const validationSchema = yup.object({
    codigo: yup.string().required(ErrorMessage.CODIGO_VAZIO),
    descricao: yup.string().required(ErrorMessage.DESCRICAO_VAZIA),
  });

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value: Recurso) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Formulário de Recursos</DialogTitle>

      <Formik
        onSubmit={(form) => { onClose(form) }}
        render={props => <Form {...props} />}
        initialValues={formValues}
        validationSchema={validationSchema}
      />

    </Dialog>
  );
}

function Form(props: FormikProps<Recurso>) {
  const {
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    values,
    
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
      <form style={{ padding: 20 }} className="" onSubmit={handleSubmit}>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              helperText={touched.codigo ? errors.codigo : ''}
              error={touched.codigo && !!errors.codigo}
              onChange={e => onChange('codigo', e)}
              onBlur={() => onBlur('codigo')}
              margin="normal"
              name="codigo"
              fullWidth
              
              value={values.codigo}
              label={FieldLabel.CODIGO}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              margin="normal"
              helperText={touched.descricao ? errors.descricao : ''}
              error={touched.descricao && !!errors.descricao}
              onChange={e => onChange('descricao', e)}
              name="descricao"
              label={FieldLabel.DESCRICAO}
              value={values.descricao}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="isEspacoFisico" value="yes" />}
              label={FieldLabel.ESPACO_FISICO}
              value={values.isEspacoFisico}
            />
          </Grid>
          <Button type="submit" variant="contained" color="primary" className="">
            {ButtonLabel.SALVAR}
          </Button>
        </Grid>

      </form>
    </div>
  );
}


