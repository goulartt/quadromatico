import { Reducer } from 'redux';
import { ProfessorState, ProfessorTypes } from './types';

const INITIAL_STATE: ProfessorState = {
  Professor: {},
  listaProfessors: [],
  modo: 'list',
};

const reducer: Reducer<ProfessorState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfessorTypes.CRIAR:
      return { ...state, modo: 'create' };
    case ProfessorTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case ProfessorTypes.OBTER_REQUEST:
      return { ...state, modo: 'list' };
    case ProfessorTypes.OBTER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        listaProfessors: action.payload,
        modo: 'list'
      };
    case ProfessorTypes.OBTER_FAILURE:
      return {
        ...state,
        modo: 'list'
      };
    case ProfessorTypes.CANCELAR_EDICAO:
      return { ...state, modo: 'list' };
    case ProfessorTypes.EDITAR:
      return { ...state, modo: 'edit' };
    default:
      return state;
  }
};

export default reducer;
