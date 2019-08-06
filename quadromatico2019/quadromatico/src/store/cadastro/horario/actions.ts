import { action } from 'typesafe-actions';
import { HorarioTypes } from './types';
import Horario from 'interfaces/entity/horario';

export const obterHorariosRequest = (idCurso: number) =>
  action(HorarioTypes.OBTER_HORARIOS_REQUEST, { idCurso });

export const obterHorariosSuccess = (horarios: Horario[]) =>
  action(HorarioTypes.OBTER_HORARIOS_SUCCESS, { horarios });

export const obterHorariosFailure = () =>
  action(HorarioTypes.OBTER_HORARIOS_FAILURE);
