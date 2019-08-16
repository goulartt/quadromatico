import { call, put } from 'redux-saga/effects';
import Disciplina from '../../../interfaces/entity/disciplina';
import api from 'services/api';
import { obterDisciplinasFailure, obterDisciplinasSuccess } from './actions';

export function* obterDisciplinas() {
    try {
        //const response = yield call(api.post, '/api/Disciplinas/getDisciplinas');

        let disciplinas: Disciplina[] = [
            {
                id: 1,
                nome: 'Disciplina 1'
            },
            {
                id: 2,
                nome: 'Disciplina 1'
            }
        ];


        yield put(obterDisciplinasSuccess(disciplinas));
    } catch (err) {
        yield put(obterDisciplinasFailure());
    }
}
