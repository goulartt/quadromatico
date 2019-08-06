import Entidade from './entidade';

export default interface Recurso extends Entidade {
  codigo: string;
  descricao: string;
  isEspacoFisico: boolean;
}
