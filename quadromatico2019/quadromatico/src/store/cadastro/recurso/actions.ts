import { action } from 'typesafe-actions';
import { RecursoTypes } from './types';

export const criarRecurso = () => action(RecursoTypes.CRIAR);
export const editarRecurso = () => action(RecursoTypes.EDITAR);
export const cancelarEdicao = () => action(RecursoTypes.CANCELAR_EDICAO);
export const cancelarCriacao = () => action(RecursoTypes.CANCELAR_CADASTRO);
