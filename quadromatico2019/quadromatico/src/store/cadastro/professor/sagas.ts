import { call, put } from 'redux-saga/effects';
import Professor from '../../../interfaces/entity/professor';
import api from 'services/api';
import { obterProfessoresFailure, obterProfessoresSuccess, deletarProfessor, criarProfessor } from './actions';

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

export function* inativarProfessor(professor: Professor) {
    yield put(deletarProfessor(professor));
}

export function* adicionarProfessor(professor: Professor) {

        yield put(criarProfessor(professor));
    
}
