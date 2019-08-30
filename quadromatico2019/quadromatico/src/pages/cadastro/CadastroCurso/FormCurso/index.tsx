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
import Curso from 'interfaces/entity/curso';
import Disciplina from 'interfaces/entity/disciplina';
import Turma from 'interfaces/entity/turma';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

interface FormCursoProps {
  open: boolean;
  selectedValue: Curso | undefined;
  onClose: (value: Curso | undefined) => void;
}

export default function FormCurso(props: FormCursoProps) {
  const { onClose, selectedValue, open } = props;
  const formValues: Curso = {
    turmas: selectedValue ? selectedValue.turmas : [] as Turma[],
    disciplinas: selectedValue ? selectedValue.disciplinas : [] as Disciplina[],
    qtdePeriodos: selectedValue ? selectedValue.qtdePeriodos : 0,
    nome: selectedValue ? selectedValue.nome : '',
    id:  selectedValue ? selectedValue.id : undefined
  };

  const validationSchema = yup.object({
    nome: yup.string().required(ErrorMessage.NOME_VAZIO),
  });

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value: Curso) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Formulário de Cursos</DialogTitle>

      <Formik
        onSubmit={(form) => { onClose(form) }}
        render={props => <Form {...props} />}
        initialValues={formValues}
        validationSchema={validationSchema}
      />

    </Dialog>
  );
}

function Form(props: FormikProps<Curso>) {
  const {
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    values
  } = props;

  const onChange = (name: keyof Curso, e: React.ChangeEvent) => {
    e.persist();
    handleChange(e);
  };

  const onBlur = (name: keyof Curso) => {
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
              helperText={touched.qtdePeriodos ? errors.qtdePeriodos : ''}
              error={touched.qtdePeriodos && !!errors.qtdePeriodos}
              onChange={e => onChange('qtdePeriodos', e)}
              name="qtdePeriodos"
              label="Quantidade de Períodos"
              fullWidth
              value={values.qtdePeriodos}
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


