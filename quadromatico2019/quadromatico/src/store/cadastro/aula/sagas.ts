import { call, put } from 'redux-saga/effects';
import Aula from '../../../interfaces/entity/aula';
import api from 'services/api';
import { obterAulasFailure, obterAulasSuccess } from './actions';

export function obterAulas() {
    /*try {
        //const response = yield call(api.post, '/api/Aulas/getAulas');

        let Aulas: Aula[] = [
            {
                id: 1,
                nome: 'Aula 1'
            },
            {
                id: 2,
                nome: 'Aula 1'
            }
        ];


        yield put(obterAulasSuccess(Aulas));
    } catch (err) {
        yield put(obterAulasFailure());
    }*/
}
