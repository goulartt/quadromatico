import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import history from 'routes/history';

import { signInSuccess, signInFailure, signInCancelRequest } from './actions';
import { AuthAction } from './types';

export function* signIn(action: AuthAction) {
  try {
    const login = action.payload;
    const response = yield call(api.post, '/login', login);
    const token = response.headers.authorization;
    localStorage.setItem('0Auth', token);

    yield put(signInSuccess(token));

    history.push('/');
  } catch (err) {
    if (err.message.indexOf('403') > -1) {
      yield put(signInFailure());
    } else {
      yield put(signInCancelRequest());
    }
  }
}

export function* checkLogin() {
  const token = localStorage.getItem('0Auth');

  if (token) {
    yield put(signInSuccess(token));
  }
}
