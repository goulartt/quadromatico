import Reactotron from 'reactotron-react-js';

declare global {
  interface Console {
    /**
     * @property tron - Referente ao acesso ao Reactotron
     */
    readonly tron: Reactotron;
  }
}
