import Curso from 'interfaces/entity/curso';
import Entidade from './entidade';
import Disciplina from './disciplina';
import Grupo from './grupo';

export default interface Aula extends Entidade {
  curso: Curso[];
  disciplina: Disciplina[];
  grupo: Grupo[];
  dataHoraInicioAula?: Date;
  dataHoraTerminoAula?: Date;
  horaInicioAula?: string;
  horaTerminoAula?: string;
}
