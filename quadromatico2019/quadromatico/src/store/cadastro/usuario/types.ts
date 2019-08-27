import Usuario from 'interfaces/entity/usuario';
import ModoCadastro from 'interfaces/common/modo-cadastro';
import CadastroState from 'interfaces/common/cadastro';

export enum UsuarioTypes {
  OBTER_REQUEST = '@Usuario/OBTER_REQUEST',
  OBTER_SUCCESS = '@Usuario/OBTER_SUCCESS',
  OBTER_FAILURE = '@Usuario/OBTER_FAILURE',
  CRIAR = '@Usuario/CRIAR',
  EDITAR = '@Usuario/EDITAR',
  SALVAR_CADASTRO_REQUEST = '@Usuario/SALVAR_CADASTRO_REQUEST',
  SALVAR_CADASTRO_SUCCESS = '@Usuario/SALVAR_CADASTRO_SUCCESS',
  SALVAR_CADASTRO_FAILURE = '@Usuario/SALVAR_CADASTRO_FAILURE',
  CANCELAR_CADASTRO = '@Usuario/CANCELAR_CADASTRO',
  CANCELAR_EDICAO = '@Usuario/CANCELAR_EDICAO',
  INATIVAR = '@Usuario/INATIVAR',
}

export interface UsuarioState extends CadastroState {
  readonly Usuario: Usuario | {};
  readonly listaUsuarios: Usuario[];
}
