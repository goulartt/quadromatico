import { action } from 'typesafe-actions';
import { AulaTypes } from './types';
import Aula from 'interfaces/entity/aula';

export const obterAulasRequest = () => action(AulaTypes.OBTER_REQUEST);
export const obterAulasSuccess = (Aulas: Aula[]) => action(AulaTypes.OBTER_SUCCESS, Aulas);
export const obterAulasFailure = () => action(AulaTypes.OBTER_FAILURE);

export const criarAula = () => action(AulaTypes.CRIAR);
export const editarAula = () => action(AulaTypes.EDITAR);
export const cancelarEdicao = () => action(AulaTypes.CANCELAR_EDICAO);
export const cancelarCriacao = () => action(AulaTypes.CANCELAR_CADASTRO);
