import Entidade from './entidade';

export default interface Horario extends Entidade {
  descricao: string;

  inicio: string;
  inicioIntervalo: string;

  terminoIntervalo: string;
  termino: string;
}
