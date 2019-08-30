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

    case CursoTypes.CRIAR:
      return {
        ...state,
        modo: 'create',
        listaRecursos: state.cursosDisponiveis
          .filter(r => r.id === action.payload.recurso.codigo).length === 0 ?
          [...state.cursosDisponiveis, action.payload.recurso] :
          state.cursosDisponiveis.map(item => {
            return item.id == action.payload.recurso.codigo ?
              action.payload.recurso : item
          })
      };
    case CursoTypes.DELETAR:
      return {
        ...state,
        modo: 'list',
        cursosDisponiveis: [...state.cursosDisponiveis].filter((value, index, arr) => {
          return value.id != action.payload.recurso.codigo;
        })
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
