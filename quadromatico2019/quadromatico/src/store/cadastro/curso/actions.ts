import { CursoTypes } from './types';
import { action } from 'typesafe-actions';
import Curso from 'interfaces/entity/curso';

export const obterCursosRequest = () => action(CursoTypes.OBTER_CURSOS_REQUEST);

export const obterCursosSuccess = (cursos: Curso[]) =>
  action(CursoTypes.OBTER_CURSOS_SUCCESS, { cursos });

export const obterCursosFailure = () => action(CursoTypes.OBTER_CURSOS_FAILURE);
