import Curso from 'interfaces/entity/curso';

export enum CursoTypes {
  OBTER_CURSOS_REQUEST = '@curso/OBTER_CURSOS_REQUEST',
  OBTER_CURSOS_SUCCESS = '@curso/OBTER_CURSOS_SUCCESS',
  OBTER_CURSOS_FAILURE = '@curso/OBTER_CURSOS_FAILURE',
}

export interface CursoState {
  readonly cursosDisponiveis: Curso[];
  readonly loading: boolean;
}
