import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import MuiIcon from 'components/MuiIcon';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from 'store';
import { FormikProps, Formik } from 'formik';
import * as yup from 'yup';
import Turma from 'interfaces/entity/turma';
import { obterCursosRequest } from 'store/cadastro/curso/actions';
import { obterHorariosRequest } from 'store/cadastro/horario/actions';
import { ErrorMessage } from 'constants/messages';

function Calendario() {
  const dispatch = useDispatch();

  const formValues: FormProps = {
    idCurso: 0,
    idHorario: 0,
    idTurma: 0,
  };

  const validationSchema = yup.object({
    idCurso: yup
      .number()
      .typeError()
      .notOneOf([0], ErrorMessage.CURSO_NAO_SELECIONADO)
      .required(ErrorMessage.CURSO_NAO_SELECIONADO),
    idHorario: yup
      .number()
      .notOneOf([0], ErrorMessage.HORARIO_NAO_SELECIONADO)
      .required(ErrorMessage.HORARIO_NAO_SELECIONADO),
    idTurma: yup
      .number()
      .notOneOf([0], ErrorMessage.TURMA_NAO_SELECIONADA)
      .required(ErrorMessage.TURMA_NAO_SELECIONADA),
  });

  function handleSubmit(data: FormProps) {}

  return (
    <Grid container justify="center" direction="row">
      <Grid container justify="center" xs={10} />

      <Formik
        onSubmit={handleSubmit}
        render={props => <Form {...props} />}
        initialValues={formValues}
        validationSchema={validationSchema}
      />

      {/* {showGrade ?
        <Grid container justify="center" >
          <GradeHorario
            curso={curso}
            horario={horario}
            periodo={periodo}
          />
        </Grid>
        : ''
      } */}
    </Grid>
  );
}

type FormProps = {
  idCurso: number;
  idHorario: number;
  idTurma: number;
};

function Form(props: FormikProps<FormProps>) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obterCursosRequest());
  }, []);

  const classes = useStyles();

  const cursos = useSelector(
    ({ curso: { cursosDisponiveis } }: ApplicationState) => cursosDisponiveis
  );

  const horarios = useSelector(
    ({ horario: { horarios } }: ApplicationState) => horarios
  );

  const [turmas, setTurmas] = useState([] as Turma[]);

  const {
    values: { idCurso },
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
  } = props;

  const onChange = (
    name: keyof FormProps,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = +e.target.value;
    if (name === 'idCurso') {
      dispatch(obterHorariosRequest(value));
    }
    if (name === 'idHorario' && idCurso) {
      const curso = cursos.find(c => c.id === +idCurso)!;
      setTurmas(curso.turmas.filter(t => t.horario.id === value));
    }
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        select
        label="Curso"
        name="idCurso"
        onChange={onChange.bind(null, 'idCurso')}
        helperText={touched.idCurso ? errors.idCurso : ''}
        error={touched.idCurso && !!errors.idCurso}
        className={classes.textField}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        <option value="" disabled selected hidden />
        {cursos.map(curso => (
          <option key={curso.id} value={curso.id}>
            {curso.nome}
          </option>
        ))}
      </TextField>

      <TextField
        select
        label="Horário"
        name="idHorario"
        onChange={onChange.bind(null, 'idHorario')}
        helperText={touched.idHorario ? errors.idHorario : ''}
        error={touched.idHorario && !!errors.idHorario}
        className={classes.textField}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        <option value="" disabled selected hidden />
        {horarios.map(horario => (
          <option key={horario.id} value={horario.id}>
            {horario.descricao}
          </option>
        ))}
      </TextField>

      <TextField
        select
        label="Turma"
        name="idTurma"
        onChange={onChange.bind(null, 'idTurma')}
        helperText={touched.idTurma ? errors.idTurma : ''}
        error={touched.idTurma && !!errors.idTurma}
        className={classes.textField}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        <option value="" disabled selected hidden />
        {turmas.map(turma => (
          <option key={turma.id} value={turma.id}>
            {turma.codigo}
          </option>
        ))}
      </TextField>

      <Button variant="text" className={classes.button} type="submit">
        <MuiIcon icon="MdToday" className={classes.leftIcon} />
        Organizar horários
      </Button>
    </form>
  );
}

export default Calendario;
