import { call, put } from 'redux-saga/effects';
import Turma from '../../../interfaces/entity/turma';
import api from 'services/api';
import { obterTurmasFailure, obterTurmasSuccess } from './actions';

export function obterTurmas() {
   /* try {
        //const response = yield call(api.post, '/api/Turmas/getTurmas');

        let Turmas: Turma[] = [
            {
                id: 1,
                codigo: '1',
                periodo: 1,
                curso: {
                    nome: 'Curso',
                    disciplinas: [{
                        nome: 'Disciplina 1'
                    }],
                    qtdePeriodos: 6,
                    turmas: []
                },
                grupos: [{
                    id: 1
                }],
                horario: {
                    descricao: 'Horario 1',
                    inicio: 'Aa',
                    inicioIntervalo: 'Aa',
                    termino: 'Aa',
                    terminoIntervalo: 'Aa'
                }

            }
        ];
        yield put(obterTurmasSuccess(Turmas));
    } catch (err) {
        yield put(obterTurmasFailure());
    }*/
}
