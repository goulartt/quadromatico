import Professor from 'interfaces/entity/professor';
import ModoCadastro from 'interfaces/common/modo-cadastro';
import CadastroState from 'interfaces/common/cadastro';

export enum ProfessorTypes {
  OBTER_REQUEST = '@Professor/OBTER_REQUEST',
  OBTER_SUCCESS = '@Professor/OBTER_SUCCESS',
  OBTER_FAILURE = '@Professor/OBTER_FAILURE',
  CRIAR = '@Professor/CRIAR',
  EDITAR = '@Professor/EDITAR',
  SALVAR_CADASTRO_REQUEST = '@Professor/SALVAR_CADASTRO_REQUEST',
  SALVAR_CADASTRO_SUCCESS = '@Professor/SALVAR_CADASTRO_SUCCESS',
  SALVAR_CADASTRO_FAILURE = '@Professor/SALVAR_CADASTRO_FAILURE',
  CANCELAR_CADASTRO = '@Professor/CANCELAR_CADASTRO',
  CANCELAR_EDICAO = '@Professor/CANCELAR_EDICAO',
  INATIVAR = '@Professor/INATIVAR',
}

export interface ProfessorState extends CadastroState {
  readonly Professor: Professor | {};
  readonly listaProfessors: Professor[];
}
