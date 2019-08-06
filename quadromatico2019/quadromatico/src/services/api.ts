import axios from 'axios';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Message = withReactContent(Swal);

function sendErrorMessage() {
  Message.fire({
    type: 'error',
    title: 'Erro ao conectar',
    text:
      'Houve algum problema de comunicação com o servidor. Por favor, verifique sua conexão de internet ou contate o administrador.',
  });
}

let port = window.location.port ? window.location.port : '';
if (port === '3000') {
  port = '8080';
}

const api = axios.create({
  baseURL: `http://localhost:${port}`,
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('0Auth');

    const headers = { ...config.headers };

    if (token) {
      headers.Authorization = token;
    }

    console.tron.log(config);

    if (config.data && config.data.data) {
      return { ...config, data: config.data.data, headers };
    }
    return { ...config, headers };
  },
  error => {
    if (error.response.status === 401) {
      const requestConfig = error.config;

      sendErrorMessage();

      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.config.status === 401 || error.message === 'Network Error') {
      const requestConfig = error.config;

      sendErrorMessage();

      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);

export default api;
