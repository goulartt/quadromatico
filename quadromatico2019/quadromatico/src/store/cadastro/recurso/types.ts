import Recurso from 'interfaces/entity/recurso';
import ModoCadastro from 'interfaces/common/modo-cadastro';
import CadastroState from 'interfaces/common/cadastro';

export enum RecursoTypes {
  OBTER_REQUEST = '@recurso/OBTER_REQUEST',
  OBTER_SUCCESS = '@recurso/OBTER_SUCCESS',
  OBTER_FAILURE = '@recurso/OBTER_FAILURE',
  CRIAR = '@recurso/CRIAR',
  EDITAR = '@recurso/EDITAR',
  SALVAR_CADASTRO_REQUEST = '@recurso/SALVAR_CADASTRO_REQUEST',
  SALVAR_CADASTRO_SUCCESS = '@recurso/SALVAR_CADASTRO_SUCCESS',
  SALVAR_CADASTRO_FAILURE = '@recurso/SALVAR_CADASTRO_FAILURE',
  CANCELAR_CADASTRO = '@recurso/CANCELAR_CADASTRO',
  CANCELAR_EDICAO = '@recurso/CANCELAR_EDICAO',
  INATIVAR = '@recurso/INATIVAR',
}

export interface RecursoState extends CadastroState {
  readonly recurso: Recurso | {};
  readonly listaRecursos: Recurso[];
}
