import Horario from 'interfaces/entity/horario';

export enum HorarioTypes {
  OBTER_HORARIOS_REQUEST = '@curso/OBTER_HORARIOS_REQUEST',
  OBTER_HORARIOS_SUCCESS = '@curso/OBTER_HORARIOS_SUCCESS',
  OBTER_HORARIOS_FAILURE = '@curso/OBTER_HORARIOS_FAILURE',
}

export interface HorarioState {
  readonly horarios: Horario[];
  loading: boolean;
}
