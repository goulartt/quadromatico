import { Reducer } from 'redux';
import { TurmaState, TurmaTypes } from './types';

const INITIAL_STATE: TurmaState = {
  Turma: {},
  listaTurmas: [],
  modo: 'list',
};

const reducer: Reducer<TurmaState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TurmaTypes.CRIAR:
      return { ...state, modo: 'create' };
    case TurmaTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case TurmaTypes.OBTER_REQUEST:
      return { ...state, modo: 'list' };
    case TurmaTypes.OBTER_SUCCESS:
      return {
        ...state,
        listaTurmas: action.payload,
        modo: 'list'
      };
    case TurmaTypes.OBTER_FAILURE:
      return {
        ...state,
        modo: 'list'
      };
    case TurmaTypes.CANCELAR_EDICAO:
      return { ...state, modo: 'list' };
    case TurmaTypes.EDITAR:
      return { ...state, modo: 'edit' };
    default:
      return state;
  }
};

export default reducer;
