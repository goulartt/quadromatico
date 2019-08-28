import { Reducer } from 'redux';
import { RecursoState, RecursoTypes } from './types';
import { ListAltRounded } from '@material-ui/icons';

const INITIAL_STATE: RecursoState = {
  recurso: {},
  listaRecursos: [],
  modo: 'list',
};

const reducer: Reducer<RecursoState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecursoTypes.CRIAR:
      return {
        ...state,
        modo: 'create',
        listaRecursos: state.listaRecursos
          .filter(r => r.codigo === action.payload.recurso.codigo).length === 0 ?
          [...state.listaRecursos, action.payload.recurso] :
          state.listaRecursos.map(item => {
            return item.codigo == action.payload.recurso.codigo ?
              action.payload.recurso : item
          })
      };
    case RecursoTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case RecursoTypes.OBTER_REQUEST:
      return { ...state, modo: 'list' };
    case RecursoTypes.OBTER_SUCCESS:
      return {
        ...state,
        listaRecursos: action.payload,
        modo: 'list'
      };
    case RecursoTypes.OBTER_FAILURE:
      return {
        ...state,
        modo: 'list'
      };

    case RecursoTypes.INATIVAR:
      return {
        ...state,
        modo: 'list',
        listaRecursos: [...state.listaRecursos].filter((value, index, arr) => {
          return value.codigo != action.payload.recurso.codigo;
        })
      };
    case RecursoTypes.CANCELAR_EDICAO:
      return { ...state, modo: 'list' };
    case RecursoTypes.EDITAR:
      return { ...state, modo: 'edit' };
    default:
      return state;
  }
};

export default reducer;
