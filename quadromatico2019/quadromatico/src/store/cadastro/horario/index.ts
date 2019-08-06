import { Reducer } from 'redux';
import { HorarioState, HorarioTypes } from './types';

const INITIAL_STATE: HorarioState = {
  horarios: [],
  loading: false,
};

const reducer: Reducer<HorarioState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HorarioTypes.OBTER_HORARIOS_REQUEST:
      return { ...state, loading: true };
    case HorarioTypes.OBTER_HORARIOS_SUCCESS:
      return {
        horarios: action.payload.horarios,
        loading: false,
      };
    case HorarioTypes.OBTER_HORARIOS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
