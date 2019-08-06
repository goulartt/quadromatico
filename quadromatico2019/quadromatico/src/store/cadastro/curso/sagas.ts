import { call, put } from 'redux-saga/effects';

import api from 'services/api';
import { obterCursosSuccess, obterCursosFailure } from './actions';

export function* obterCursos() {
  try {
    const response = yield call(api.post, '/api/usuario/getCursosComAcesso');
    yield put(obterCursosSuccess(response.data));
  } catch (err) {
    yield put(obterCursosFailure());
  }
}
