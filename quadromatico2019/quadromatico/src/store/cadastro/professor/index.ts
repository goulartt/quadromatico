import { Reducer } from 'redux';
import { ProfessorState, ProfessorTypes } from './types';

const INITIAL_STATE: ProfessorState = {
  Professor: {},
  listaProfessores: [],
  modo: 'list',
};

const reducer: Reducer<ProfessorState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfessorTypes.CRIAR:
      return {
        ...state,
        modo: 'create',
        listaProfessores: state.listaProfessores
          .filter(r => r.id === action.payload.professor.id).length === 0 ?
          [...state.listaProfessores, action.payload.professor] :
          state.listaProfessores.map(item => {
            return item.id == action.payload.professor.id ?
              action.payload.professor : item
          })
      };
    case ProfessorTypes.CANCELAR_CADASTRO:
      return { ...state, modo: 'list' };
    case ProfessorTypes.OBTER_REQUEST:
      return { ...state, modo: 'list' };
    case ProfessorTypes.OBTER_SUCCESS:
      return {
        ...state,
        listaProfessores: action.payload,
        modo: 'list'
      };
    case ProfessorTypes.OBTER_FAILURE:
      return {
        ...state,
        modo: 'list'
      };
    case ProfessorTypes.INATIVAR:
      return {
        ...state,
        modo: 'list',
        listaProfessores: [...state.listaProfessores].filter((value, index, arr) => {
          return value.id != action.payload.professor.id;
        })
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
