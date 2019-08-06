import { Reducer } from 'redux';
import { CalendarioState, CalendarioTypes } from './types';

const INITIAL_STATE: CalendarioState = {
  cursoSelecionado: null,
  horarioSelecionado: null,
  turmaSelecionada: null,
};

const reducer: Reducer<CalendarioState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CalendarioTypes.DEFINIR_EDICAO:
      return { ...action.payload };
    case CalendarioTypes.LIMPAR_EDICAO:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default reducer;
