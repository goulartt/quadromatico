import Disciplina from 'interfaces/entity/disciplina';
import ModoCadastro from 'interfaces/common/modo-cadastro';
import CadastroState from 'interfaces/common/cadastro';

export enum DisciplinaTypes {
  OBTER_REQUEST = '@Disciplina/OBTER_REQUEST',
  OBTER_SUCCESS = '@Disciplina/OBTER_SUCCESS',
  OBTER_FAILURE = '@Disciplina/OBTER_FAILURE',
  CRIAR = '@Disciplina/CRIAR',
  EDITAR = '@Disciplina/EDITAR',
  SALVAR_CADASTRO_REQUEST = '@Disciplina/SALVAR_CADASTRO_REQUEST',
  SALVAR_CADASTRO_SUCCESS = '@Disciplina/SALVAR_CADASTRO_SUCCESS',
  SALVAR_CADASTRO_FAILURE = '@Disciplina/SALVAR_CADASTRO_FAILURE',
  CANCELAR_CADASTRO = '@Disciplina/CANCELAR_CADASTRO',
  CANCELAR_EDICAO = '@Disciplina/CANCELAR_EDICAO',
  INATIVAR = '@Disciplina/INATIVAR',
}

export interface DisciplinaState extends CadastroState {
  readonly disciplina: Disciplina | {};
  readonly listaDisciplinas: Disciplina[];
}
