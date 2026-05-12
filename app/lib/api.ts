import axios from 'axios';

//Criar a conexão base apontando para o Spring
const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export default api;