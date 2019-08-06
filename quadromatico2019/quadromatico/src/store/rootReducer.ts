import { combineReducers } from 'redux';

import auth from './auth';
import curso from './cadastro/curso';
import recurso from './cadastro/recurso';
import horario from './cadastro/horario';
import calendario from './calendario';

export default combineReducers({
  auth,
  curso,
  calendario,
  horario,
  recurso,
});
