import { Reducer } from 'redux';
import { AulaState, AulaTypes } from './types';

const INITIAL_STATE: AulaState = {
  Aula: {},
  listaAulas: [],
  modo: 'list',
};

const reducer: Reducer<AulaState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AulaTypes.CRIAR:
      return { ...state, modo: 'create' };
    case AulaTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case AulaTypes.OBTER_REQUEST:
      return { ...state, modo: 'list' };
    case AulaTypes.OBTER_SUCCESS:
      return {
        ...state,
        listaAulas: action.payload,
        modo: 'list'
      };
    case AulaTypes.OBTER_FAILURE:
      return {
        ...state,
        modo: 'list'
      };
    case AulaTypes.CANCELAR_EDICAO:
      return { ...state, modo: 'list' };
    case AulaTypes.EDITAR:
      return { ...state, modo: 'edit' };
    default:
      return state;
  }
};

export default reducer;
