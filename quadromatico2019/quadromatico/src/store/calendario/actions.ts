import { action } from 'typesafe-actions';
import { CalendarioTypes, CalendarioState } from './types';

export const definirEdicaoCalendario = (selecao: CalendarioState) =>
  action(CalendarioTypes.DEFINIR_EDICAO, selecao);

export const limparEdicaoCalendario = () =>
  action(CalendarioTypes.LIMPAR_EDICAO);
