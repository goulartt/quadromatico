import { call, put } from 'redux-saga/effects';
import Professor from '../../../interfaces/entity/professor';
import api from 'services/api';
import { obterProfessoresFailure, obterProfessoresSuccess } from './actions';

export function* obterProfessores() {
    try {
        //const response = yield call(api.post, '/api/Professors/getProfessors');

        let Professors: Professor[] = [
            {
                id: 1,
                nome: 'Professor 1'
            },
            {
                id: 2,
                nome: 'Professor 1'
            }
        ];


        yield put(obterProfessoresSuccess(Professors));
    } catch (err) {
        yield put(obterProfessoresFailure());
    }
}
