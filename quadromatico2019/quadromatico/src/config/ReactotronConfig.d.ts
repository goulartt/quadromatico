import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

import './GlobalsConfig.d.ts';

if (process.env.NODE_ENV === 'development') {
  Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  Reactotron.clear();

  console.tron = Reactotron;
}
