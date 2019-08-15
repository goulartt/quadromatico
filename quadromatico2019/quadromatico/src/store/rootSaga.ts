import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { signIn, checkLogin } from './auth/sagas';
import { CursoTypes } from './cadastro/curso/types';
import { obterCursos } from './cadastro/curso/sagas';
import { HorarioTypes } from './cadastro/horario/types';
import { obterHorariosCurso } from './cadastro/horario/sagas';
import { obterRequests } from './cadastro/recurso/sagas';
import { RecursoTypes } from './cadastro/recurso/types';

export default function* rootSaga() {
  return yield all([
    checkLogin(),
    takeLatest(AuthTypes.SIGNIN_REQUEST, signIn),
    takeLatest(CursoTypes.OBTER_CURSOS_REQUEST, obterCursos),
    takeLatest(HorarioTypes.OBTER_HORARIOS_REQUEST, obterHorariosCurso),
    takeLatest(RecursoTypes.OBTER_REQUEST, obterRequests),

  ]);
}
