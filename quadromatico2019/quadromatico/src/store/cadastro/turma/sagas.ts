import { call, put } from 'redux-saga/effects';
import Turma from '../../../interfaces/entity/turma';
import api from 'services/api';
import { obterTurmasFailure, obterTurmasSuccess } from './actions';

export function* obterTurmas() {
    try {
        const response = yield call(api.post, '/api/Turmas/getTurmas');


        yield put(obterTurmasSuccess(response.data));
    } catch (err) {
        yield put(obterTurmasFailure());
    }
}
