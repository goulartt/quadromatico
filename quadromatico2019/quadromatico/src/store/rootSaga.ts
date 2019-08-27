import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { signIn, checkLogin } from './auth/sagas';
import { CursoTypes } from './cadastro/curso/types';
import { obterCursos } from './cadastro/curso/sagas';
import { HorarioTypes } from './cadastro/horario/types';
import { obterHorariosCurso } from './cadastro/horario/sagas';
import { obterRequests, inativarRecurso } from './cadastro/recurso/sagas';
import { obterDisciplinas } from './cadastro/disciplina/sagas';
import { obterTurmas } from './cadastro/turma/sagas';
import { obterProfessores } from './cadastro/professor/sagas';
import { obterAulas } from './cadastro/aula/sagas';
import { obterUsuarios } from './cadastro/usuario/sagas';

import { RecursoTypes } from './cadastro/recurso/types';
import { DisciplinaTypes } from './cadastro/disciplina/types';

import { TurmaTypes } from './cadastro/turma/types';
import { ProfessorTypes } from './cadastro/professor/types';
import { AulaTypes } from './cadastro/aula/types';
import { UsuarioTypes } from './cadastro/usuario/types';

export default function* rootSaga() {
  return yield all([
    checkLogin(),
    takeLatest(AuthTypes.SIGNIN_REQUEST, signIn),
    takeLatest(CursoTypes.OBTER_CURSOS_REQUEST, obterCursos),
    takeLatest(HorarioTypes.OBTER_HORARIOS_REQUEST, obterHorariosCurso),
    takeLatest(RecursoTypes.OBTER_REQUEST, obterRequests),
    takeLatest(DisciplinaTypes.OBTER_REQUEST, obterDisciplinas),
    takeLatest(TurmaTypes.OBTER_REQUEST, obterTurmas),
    takeLatest(ProfessorTypes.OBTER_REQUEST, obterProfessores),
    takeLatest(AulaTypes.OBTER_REQUEST, obterAulas),
    takeLatest(UsuarioTypes.OBTER_REQUEST, obterUsuarios),

    takeLatest(RecursoTypes.INATIVAR, inativarRecurso),

  ]);
}
