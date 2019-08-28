import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import Professor from 'interfaces/entity/professor';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

interface FormProfessorProps {
  open: boolean;
  selectedValue: Professor | undefined;
  onClose: (value: Professor | undefined) => void;
}

export default function FormProfessor(props: FormProfessorProps) {
  const { onClose, selectedValue, open } = props;
  const formValues: Professor = {
    id: selectedValue ? selectedValue.id : undefined,
    nome: selectedValue ? selectedValue.nome : '',
  };

  const validationSchema = yup.object({
    nome: yup.string().required(ErrorMessage.NOME_VAZIO),
  });

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value: Professor) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Formulário de Professores</DialogTitle>

      <Formik
        onSubmit={(form) => { onClose(form) }}
        render={props => <Form {...props} />}
        initialValues={formValues}
        validationSchema={validationSchema}
      />

    </Dialog>
  );
}

function Form(props: FormikProps<Professor>) {
  const {
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    values
  } = props;

  const onChange = (name: keyof Professor, e: React.ChangeEvent) => {
    e.persist();
    handleChange(e);
  };

  const onBlur = (name: keyof Professor) => {
    setFieldTouched(name, true, true);
  };

  return (
    <div>
      <form style={{ padding: 20 }} className="" onSubmit={handleSubmit}>

        <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
            <TextField
              required
              helperText={touched.id ? errors.id : ''}
              error={touched.id && !!errors.id}
              onChange={e => onChange('id', e)}
              onBlur={() => onBlur('id')}
              margin="normal"
              name="id"
              fullWidth
              
              value={values.id}
              label={FieldLabel.CODIGO}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              margin="normal"
              helperText={touched.nome ? errors.nome : ''}
              error={touched.nome && !!errors.nome}
              onChange={e => onChange('nome', e)}
              name="nome"
              label={FieldLabel.NOME}
              value={values.nome}

              fullWidth
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


