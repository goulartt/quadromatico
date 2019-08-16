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
import Professor from 'interfaces/entity/professor';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

interface FormProfessorProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function FormProfessor(props: FormProfessorProps) {
  const { onClose, selectedValue, open } = props;
  const formValues: Professor = {
    nome: ''
  };

  const validationSchema = yup.object({
    nome: yup.string().required(ErrorMessage.NOME_VAZIO),
  });

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value: string) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Formulário de Professors</DialogTitle>

      <Formik
        onSubmit={() => { }}
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
          <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="normal"
              helperText={touched.nome ? errors.nome : ''}
              error={touched.nome && !!errors.nome}
              onChange={e => onChange('nome', e)}
              name="nome"
              label={FieldLabel.NOME}
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


