import { call, put } from 'redux-saga/effects';
import Aula from '../../../interfaces/entity/aula';
import api from 'services/api';
import { obterAulasFailure, obterAulasSuccess } from './actions';

export function* obterAulas() {
    try {
        const response = yield call(api.post, '/api/Aulas/getAulas');


        yield put(obterAulasSuccess(response.data));
    } catch (err) {
        yield put(obterAulasFailure());
    }
}
