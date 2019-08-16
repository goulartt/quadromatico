import { action } from 'typesafe-actions';
import { TurmaTypes } from './types';
import Turma from 'interfaces/entity/turma';

export const obterTurmasRequest = () => action(TurmaTypes.OBTER_REQUEST);
export const obterTurmasSuccess = (Turmas: Turma[]) => action(TurmaTypes.OBTER_SUCCESS, Turmas);
export const obterTurmasFailure = () => action(TurmaTypes.OBTER_FAILURE);

export const criarTurma = () => action(TurmaTypes.CRIAR);
export const editarTurma = () => action(TurmaTypes.EDITAR);
export const cancelarEdicao = () => action(TurmaTypes.CANCELAR_EDICAO);
export const cancelarCriacao = () => action(TurmaTypes.CANCELAR_CADASTRO);
