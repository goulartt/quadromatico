export enum AuthTypes {
  SIGNIN_REQUEST = '@auth/SIGNIN_REQUEST',
  SIGNIN_REQUEST_CANCELLED = '@auth/SIGNIN_REQUEST_CANCELLED',
  SIGNIN_SUCCESS = '@auth/SIGNIN_SUCCESS',
  SIGNIN_FAILURE = '@auth/SIGNIN_FAILURE',
}

export type AuthAction = {
  type: AuthTypes;
  payload: Auth;
};

export interface Auth {
  login: string;
  senha: string;
}

export interface AuthState {
  readonly data: Auth;
  readonly isLogged: boolean;
  readonly loading: boolean;
  readonly authFailed: boolean;
}
