import { Reducer } from 'redux';
import { UsuarioState, UsuarioTypes } from './types';

const INITIAL_STATE: UsuarioState = {
  Usuario: {},
  listaUsuarios: [],
  modo: 'list',
};

const reducer: Reducer<UsuarioState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsuarioTypes.CRIAR:
      return { ...state, modo: 'create' };
    case UsuarioTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case UsuarioTypes.OBTER_REQUEST:
      return { ...state, modo: 'list' };
    case UsuarioTypes.OBTER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        listaUsuarios: action.payload,
        modo: 'list'
      };
    case UsuarioTypes.OBTER_FAILURE:
      return {
        ...state,
        modo: 'list'
      };
    case UsuarioTypes.CANCELAR_EDICAO:
      return { ...state, modo: 'list' };
    case UsuarioTypes.EDITAR:
      return { ...state, modo: 'edit' };
    default:
      return state;
  }
};

export default reducer;
