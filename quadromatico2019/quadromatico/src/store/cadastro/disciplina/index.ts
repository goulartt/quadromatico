import { Reducer } from 'redux';
import { DisciplinaState, DisciplinaTypes } from './types';

const INITIAL_STATE: DisciplinaState = {
  disciplina: {},
  listaDisciplinas: [],
  modo: 'list',
};

const reducer: Reducer<DisciplinaState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DisciplinaTypes.CRIAR:
      return {
        ...state,
        modo: 'create',
        listaDisciplinas: state.listaDisciplinas
          .filter(r => r.id === action.payload.disciplina.id).length === 0 ?
          [...state.listaDisciplinas, action.payload.disciplina] :
          state.listaDisciplinas.map(item => {
            return item.id == action.payload.disciplina.id ?
              action.payload.disciplina : item
          })
      };
    case DisciplinaTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case DisciplinaTypes.OBTER_REQUEST:
      return { ...state, modo: 'list' };
    case DisciplinaTypes.OBTER_SUCCESS:
      return {
        ...state,
        listaDisciplinas: action.payload,
        modo: 'list'
      };
    case DisciplinaTypes.OBTER_FAILURE:
      return {
        ...state,
        modo: 'list'
      };
    case DisciplinaTypes.INATIVAR:
      return {
        ...state,
        modo: 'list',
        listaDisciplinas: [...state.listaDisciplinas].filter((value, index, arr) => {
          return value.id != action.payload.disciplina.id;
        })
      };
    case DisciplinaTypes.CANCELAR_EDICAO:
      return { ...state, modo: 'list' };
    case DisciplinaTypes.EDITAR:
      return { ...state, modo: 'edit' };
    default:
      return state;
  }
};

export default reducer;
