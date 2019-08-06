import { Reducer } from 'redux';
import { RecursoState, RecursoTypes } from './types';

const INITIAL_STATE: RecursoState = {
  recurso: {},
  listaRecursos: [],
  modo: 'list',
};

const reducer: Reducer<RecursoState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecursoTypes.CRIAR:
      return { ...state, modo: 'create' };
    case RecursoTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case RecursoTypes.CANCELAR_EDICAO:
      return { ...state, modo: 'list' };
    case RecursoTypes.EDITAR:
      return { ...state, modo: 'edit' };
    default:
      return state;
  }
};

export default reducer;
