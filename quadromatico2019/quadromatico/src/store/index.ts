import { HorarioState } from './cadastro/horario/types';
import { CursoState } from './cadastro/curso/types';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { AuthState } from 'store/auth/types';

import rootReducer from 'store/rootReducer';
import rootSaga from 'store/rootSaga';
import { CalendarioState } from './calendario/types';
import { RecursoState } from './cadastro/recurso/types';

export interface ApplicationState {
  auth: AuthState;
  curso: CursoState;
  calendario: CalendarioState;
  horario: HorarioState;
  recurso: RecursoState;
}

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
