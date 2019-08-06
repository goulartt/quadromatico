import { action } from 'typesafe-actions';
import { AuthTypes, Auth } from './types';

export const signInRequest = (data: Auth) =>
  action(AuthTypes.SIGNIN_REQUEST, { data });

export const signInCancelRequest = () =>
  action(AuthTypes.SIGNIN_REQUEST_CANCELLED);

export const signInSuccess = (token: string) =>
  action(AuthTypes.SIGNIN_SUCCESS, { token });

export const signInFailure = () => action(AuthTypes.SIGNIN_FAILURE);
