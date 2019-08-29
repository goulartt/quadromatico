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
      return {
        ...state,
        modo: 'create',
        listaTurmas: state.listaTurmas
          .filter(r => r.codigo === action.payload.turma.codigo).length === 0 ?
          [...state.listaTurmas, action.payload.turma] :
          state.listaTurmas.map(item => {
            return item.codigo == action.payload.turma.codigo ?
              action.payload.turma : item
          })
      };
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

    case TurmaTypes.INATIVAR:
      return {
        ...state,
        modo: 'list',
        listaTurmas: [...state.listaTurmas].filter((value, index, arr) => {
          return value.codigo != action.payload.turma.codigo;
        })
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
