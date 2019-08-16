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
      return { ...state, modo: 'create' };
    case DisciplinaTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case DisciplinaTypes.OBTER_REQUEST:
      return { ...state, modo: 'list' };
    case DisciplinaTypes.OBTER_SUCCESS:
      console.log(action.payload)
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
    case DisciplinaTypes.CANCELAR_EDICAO:
      return { ...state, modo: 'list' };
    case DisciplinaTypes.EDITAR:
      return { ...state, modo: 'edit' };
    default:
      return state;
  }
};

export default reducer;
