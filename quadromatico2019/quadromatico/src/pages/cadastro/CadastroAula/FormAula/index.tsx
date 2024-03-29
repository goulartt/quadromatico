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
import Aula from 'interfaces/entity/aula';
import Curso from 'interfaces/entity/curso';
import Disciplina from 'interfaces/entity/disciplina';
import Grupo from 'interfaces/entity/grupo';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

interface FormAulaProps {
  open: boolean;
  selectedValue: Aula | undefined;
  onClose: (value: Aula | undefined) => void;
}

export default function FormAula(props: FormAulaProps) {
  const { onClose, selectedValue, open } = props;
  const formValues: Aula = {
    curso: selectedValue ? selectedValue.curso : [] as Curso[],
    dataHoraInicioAula: selectedValue ? selectedValue.dataHoraInicioAula : new Date(),
    dataHoraTerminoAula: selectedValue ? selectedValue.dataHoraTerminoAula :  new Date(),
    disciplina: selectedValue ? selectedValue.disciplina : [] as Disciplina[],
    grupo: selectedValue ? selectedValue.grupo : [] as Grupo[],
    horaInicioAula: selectedValue ? selectedValue.horaInicioAula : '',
    horaTerminoAula:  selectedValue ? selectedValue.horaTerminoAula : '',
    id:  selectedValue ? selectedValue.id : undefined
  };

  const validationSchema = yup.object({
    nome: yup.string().required(ErrorMessage.NOME_VAZIO),
  });

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value: Aula) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Formulário de Aulas</DialogTitle>

      <Formik
        onSubmit={(form) => { onClose(form) }}
        render={props => <Form {...props} />}
        initialValues={formValues}
        validationSchema={validationSchema}
      />

    </Dialog>
  );
}

function Form(props: FormikProps<Aula>) {
  const {
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    values
  } = props;

  const onChange = (name: keyof Aula, e: React.ChangeEvent) => {
    e.persist();
    handleChange(e);
  };

  const onBlur = (name: keyof Aula) => {
    setFieldTouched(name, true, true);
  };

  return (
    <div>
      <form style={{ padding: 20 }} className="" onSubmit={handleSubmit}>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              margin="normal"
              helperText={touched.horaInicioAula ? errors.horaInicioAula : ''}
              error={touched.horaInicioAula && !!errors.horaInicioAula}
              onChange={e => onChange('horaInicioAula', e)}
              name="horaInicioAula"
              label="Hora Inicio"
              fullWidth
              value={values.horaInicioAula}
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


