import { action } from 'typesafe-actions';
import { UsuarioTypes } from './types';
import Usuario from 'interfaces/entity/usuario';

export const obterUsuariosRequest = () => action(UsuarioTypes.OBTER_REQUEST);
export const obterUsuariosSuccess = (Usuarios: Usuario[]) => action(UsuarioTypes.OBTER_SUCCESS, Usuarios);
export const obterUsuariosFailure = () => action(UsuarioTypes.OBTER_FAILURE);

export const criarUsuario = () => action(UsuarioTypes.CRIAR);
export const editarUsuario = () => action(UsuarioTypes.EDITAR);
export const cancelarEdicao = () => action(UsuarioTypes.CANCELAR_EDICAO);
export const cancelarCriacao = () => action(UsuarioTypes.CANCELAR_CADASTRO);
