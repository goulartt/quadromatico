import { action } from 'typesafe-actions';
import { RecursoTypes } from './types';
import Recurso from 'interfaces/entity/recurso';

export const obterRecursosRequest = () => action(RecursoTypes.OBTER_REQUEST);
export const obterRecursosSuccess = (recursos: Recurso[]) => action(RecursoTypes.OBTER_SUCCESS, recursos);
export const obterRecursosFailure = () => action(RecursoTypes.OBTER_FAILURE);

export const criarRecurso = () => action(RecursoTypes.CRIAR);
export const editarRecurso = () => action(RecursoTypes.EDITAR);
export const cancelarEdicao = () => action(RecursoTypes.CANCELAR_EDICAO);
export const cancelarCriacao = () => action(RecursoTypes.CANCELAR_CADASTRO);
