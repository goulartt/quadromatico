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
      return {
        ...state,
        modo: 'create',
        listaAulas: state.listaAulas
          .filter(r => r.id === action.payload.aula.id).length === 0 ?
          [...state.listaAulas, action.payload.aula] :
          state.listaAulas.map(item => {
            return item.id == action.payload.aula.id ?
              action.payload.recurso : item
          })
      };
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

    case AulaTypes.INATIVAR:
      return {
        ...state,
        modo: 'list',
        listaAulas: [...state.listaAulas].filter((value, index, arr) => {
          return value.id != action.payload.aula.id;
        })
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
