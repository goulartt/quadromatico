import './config/ReactotronConfig.d.ts';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'typeface-roboto';

import store from 'store';
import Routes from 'routes';

const App: React.FC = () => (
  <Provider store={store}>
    <Routes />
    <ToastContainer autoClose={5000} />
  </Provider>
);

export default App;
