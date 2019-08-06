import Entidade from './entidade';
import Curso from './curso';
import Horario from './horario';
import Grupo from './grupo';

export default interface Turma extends Entidade {
  codigo: string;
  curso: Curso;
  horario: Horario;
  periodo: number;
  grupos: Grupo[];
}
