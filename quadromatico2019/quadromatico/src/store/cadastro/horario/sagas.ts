import { call, put } from 'redux-saga/effects';

import api from 'services/api';
import { obterHorariosSuccess, obterHorariosFailure } from './actions';
import { AnyAction } from 'redux';
import { HorarioTypes } from './types';

export function* obterHorariosCurso(action: {
  type: HorarioTypes;
  payload: { idCurso: number };
}) {
  try {
    const idCurso = action.payload.idCurso;
    const response = yield call(api.get, '/api/curso/getHorariosCurso', {
      params: { idCurso },
    });
    yield put(obterHorariosSuccess(response.data));
  } catch (err) {
    yield put(obterHorariosFailure());
  }
}
