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
      return {
        ...state,
        modo: 'create',
        listaUsuarios: state.listaUsuarios
          .filter(r => r.id === action.payload.usuario.id).length === 0 ?
          [...state.listaUsuarios, action.payload.usuario] :
          state.listaUsuarios.map(item => {
            return item.id == action.payload.usuario.id ?
              action.payload.usuario : item
          })
      };
    case UsuarioTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case UsuarioTypes.OBTER_REQUEST:
      return { ...state, modo: 'list' };
    case UsuarioTypes.OBTER_SUCCESS:
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
    case UsuarioTypes.INATIVAR:
      return {
        ...state,
        modo: 'list',
        listaUsuarios: [...state.listaUsuarios].filter((value, index, arr) => {
          return value.id != action.payload.usuario.id;
        })
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
