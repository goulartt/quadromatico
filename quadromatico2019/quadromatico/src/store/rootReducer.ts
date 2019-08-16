import { combineReducers } from 'redux';

import auth from './auth';
import curso from './cadastro/curso';
import recurso from './cadastro/recurso';
import horario from './cadastro/horario';
import disciplina from './cadastro/disciplina';
import turma from './cadastro/turma';
import professor from './cadastro/professor';
import aula from './cadastro/aula';
import usuario from './cadastro/usuario';

import calendario from './calendario';

export default combineReducers({
  auth,
  curso,
  calendario,
  horario,
  recurso,
  disciplina,
  turma,
  professor,
  aula,
  usuario
});
