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
import Turma from 'interfaces/entity/turma';
import Curso from 'interfaces/entity/curso';
import Horario from 'interfaces/entity/horario';
import Grupo from 'interfaces/entity/grupo';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

interface FormTurmaProps {
  open: boolean;
  selectedValue: Turma | undefined;
  onClose: (value: Turma | undefined) => void;
}

export default function FormDisciplina(props: FormTurmaProps) {
  const { onClose, selectedValue, open } = props;
  const formValues: Turma = {
    codigo: selectedValue ? selectedValue.codigo : '',
    periodo:  selectedValue ? selectedValue.periodo : 0,
    curso: selectedValue ? selectedValue.curso : {} as Curso ,
    grupos: selectedValue ? selectedValue.grupos : [] as Grupo[],
    horario: selectedValue ? selectedValue.horario : {} as Horario,
  };

  const validationSchema = yup.object({
    nome: yup.string().required(ErrorMessage.NOME_VAZIO),
  });

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value: Turma) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Formulário de Turmas</DialogTitle>

      <Formik
        onSubmit={(form) => { onClose(form) }}
        render={props => <Form {...props} />}
        initialValues={formValues}
        validationSchema={validationSchema}
      />

    </Dialog>
  );
}

function Form(props: FormikProps<Turma>) {
  const {
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    values
  } = props;

  const onChange = (name: keyof Turma, e: React.ChangeEvent) => {
    e.persist();
    handleChange(e);
  };

  const onBlur = (name: keyof Turma) => {
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
              helperText={touched.codigo ? errors.codigo : ''}
              error={touched.codigo && !!errors.codigo}
              onChange={e => onChange('codigo', e)}
              name="codigo"
              label={FieldLabel.CODIGO}
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


