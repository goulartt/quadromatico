import { call, put } from 'redux-saga/effects';
import Usuario from '../../../interfaces/entity/usuario';
import api from 'services/api';
import { obterUsuariosFailure, obterUsuariosSuccess } from './actions';

export function* obterUsuarios() {
    try {
        //const response = yield call(api.post, '/api/Usuarios/getUsuarios');

        let Usuarios: Usuario[] = [
            {
                id: 1,
                login: 'Usuario 1'
            },
            {
                id: 2,
                login: 'Usuario 1'
            }
        ];


        yield put(obterUsuariosSuccess(Usuarios));
    } catch (err) {
        yield put(obterUsuariosFailure());
    }
}
