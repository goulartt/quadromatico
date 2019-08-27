import { call, put } from 'redux-saga/effects';
import Recurso from '../../../interfaces/entity/recurso';
import api from 'services/api';
import { obterRecursosFailure, obterRecursosSuccess } from './actions';

export function* obterRequests() {
    try {
        //const response = yield call(api.post, '/api/recursos/getRecursos');

        let recursos: Recurso[] = [
            {
                codigo: '1',
                descricao: 'test',
                id: 1,
                isEspacoFisico: false
            },
            {
                codigo: '2',
                descricao: 'test',
                id: 2,
                isEspacoFisico: false
            }
        ];


        yield put(obterRecursosSuccess(recursos));
    } catch (err) {
        yield put(obterRecursosFailure());
    }
}

export function* inativarRecurso() {
    yield console.log('To DO');
}
