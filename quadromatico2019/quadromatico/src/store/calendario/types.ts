import Curso from 'interfaces/entity/curso';
import Turma from 'interfaces/entity/turma';
import Horario from 'interfaces/entity/horario';

export enum CalendarioTypes {
  DEFINIR_EDICAO = '@calendario/DEFINIR_EDICAO',
  LIMPAR_EDICAO = '@calendario/LIMPAR_EDICAO',
}

export interface CalendarioState {
  readonly cursoSelecionado: Curso | null;
  readonly horarioSelecionado: Horario | null;
  readonly turmaSelecionada: Turma | null;
}
