import Turma from 'interfaces/entity/turma';
import ModoCadastro from 'interfaces/common/modo-cadastro';
import CadastroState from 'interfaces/common/cadastro';

export enum TurmaTypes {
  OBTER_REQUEST = '@Turma/OBTER_REQUEST',
  OBTER_SUCCESS = '@Turma/OBTER_SUCCESS',
  OBTER_FAILURE = '@Turma/OBTER_FAILURE',
  CRIAR = '@Turma/CRIAR',
  EDITAR = '@Turma/EDITAR',
  SALVAR_CADASTRO_REQUEST = '@Turma/SALVAR_CADASTRO_REQUEST',
  SALVAR_CADASTRO_SUCCESS = '@Turma/SALVAR_CADASTRO_SUCCESS',
  SALVAR_CADASTRO_FAILURE = '@Turma/SALVAR_CADASTRO_FAILURE',
  CANCELAR_CADASTRO = '@Turma/CANCELAR_CADASTRO',
  CANCELAR_EDICAO = '@Turma/CANCELAR_EDICAO',
  INATIVAR = '@Turma/INATIVAR',
}

export interface TurmaState extends CadastroState {
  readonly Turma: Turma | {};
  readonly listaTurmas: Turma[];
}
