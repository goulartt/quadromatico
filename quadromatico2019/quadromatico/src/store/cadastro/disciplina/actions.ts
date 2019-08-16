import { action } from 'typesafe-actions';
import { DisciplinaTypes } from './types';
import Disciplina from 'interfaces/entity/disciplina';

export const obterDisciplinasRequest = () => action(DisciplinaTypes.OBTER_REQUEST);
export const obterDisciplinasSuccess = (Disciplinas: Disciplina[]) => action(DisciplinaTypes.OBTER_SUCCESS, Disciplinas);
export const obterDisciplinasFailure = () => action(DisciplinaTypes.OBTER_FAILURE);

export const criarDisciplina = () => action(DisciplinaTypes.CRIAR);
export const editarDisciplina = () => action(DisciplinaTypes.EDITAR);
export const cancelarEdicao = () => action(DisciplinaTypes.CANCELAR_EDICAO);
export const cancelarCriacao = () => action(DisciplinaTypes.CANCELAR_CADASTRO);
