import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  data: {
    login: '',
    senha: '',
  },
  isLogged: false,
  loading: false,
  authFailed: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGNIN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        isLogged: true,
        authFailed: false,
      };
    case AuthTypes.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        authFailed: true,
      };
    case AuthTypes.SIGNIN_REQUEST_CANCELLED:
      return {
        ...state,
        loading: false,
        authFailed: false,
      };
    default:
      return state;
  }
};

export default reducer;
