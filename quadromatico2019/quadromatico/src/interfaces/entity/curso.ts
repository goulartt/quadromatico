import Entidade from './entidade';
import Disciplina from './disciplina';
import Turma from './turma';

export default interface Curso extends Entidade {
  nome: string;
  qtdePeriodos: number;
  disciplinas: Disciplina[];
  turmas: Turma[];
}
