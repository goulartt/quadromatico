import Aula from 'interfaces/entity/aula';
import ModoCadastro from 'interfaces/common/modo-cadastro';
import CadastroState from 'interfaces/common/cadastro';

export enum AulaTypes {
  OBTER_REQUEST = '@Aula/OBTER_REQUEST',
  OBTER_SUCCESS = '@Aula/OBTER_SUCCESS',
  OBTER_FAILURE = '@Aula/OBTER_FAILURE',
  CRIAR = '@Aula/CRIAR',
  EDITAR = '@Aula/EDITAR',
  SALVAR_CADASTRO_REQUEST = '@Aula/SALVAR_CADASTRO_REQUEST',
  SALVAR_CADASTRO_SUCCESS = '@Aula/SALVAR_CADASTRO_SUCCESS',
  SALVAR_CADASTRO_FAILURE = '@Aula/SALVAR_CADASTRO_FAILURE',
  CANCELAR_CADASTRO = '@Aula/CANCELAR_CADASTRO',
  CANCELAR_EDICAO = '@Aula/CANCELAR_EDICAO',
  INATIVAR = '@Aula/INATIVAR',
}

export interface AulaState extends CadastroState {
  readonly Aula: Aula | {};
  readonly listaAulas: Aula[];
}
