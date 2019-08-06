import { Reducer } from 'redux';
import { CursoState, CursoTypes } from './types';

const INITIAL_STATE: CursoState = {
  cursosDisponiveis: [],
  loading: false,
};

const reducer: Reducer<CursoState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CursoTypes.OBTER_CURSOS_REQUEST:
      return { ...state, loading: true };
    case CursoTypes.OBTER_CURSOS_SUCCESS:
      return {
        cursosDisponiveis: action.payload.cursos,
        loading: false,
      };
    case CursoTypes.OBTER_CURSOS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
