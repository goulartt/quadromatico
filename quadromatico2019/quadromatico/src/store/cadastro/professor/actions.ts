import { action } from 'typesafe-actions';
import { ProfessorTypes } from './types';
import Professor from 'interfaces/entity/professor';

export const obterProfessoresRequest = () => action(ProfessorTypes.OBTER_REQUEST);
export const obterProfessoresSuccess = (Professors: Professor[]) => action(ProfessorTypes.OBTER_SUCCESS, Professors);
export const obterProfessoresFailure = () => action(ProfessorTypes.OBTER_FAILURE);

export const criarProfessor = (professor: Professor) => action(ProfessorTypes.CRIAR, { professor });
export const deletarProfessor = (professor: Professor) => action(ProfessorTypes.INATIVAR, { professor });

export const editarProfessor = () => action(ProfessorTypes.EDITAR);
export const cancelarEdicao = () => action(ProfessorTypes.CANCELAR_EDICAO);
export const cancelarCriacao = () => action(ProfessorTypes.CANCELAR_CADASTRO);
