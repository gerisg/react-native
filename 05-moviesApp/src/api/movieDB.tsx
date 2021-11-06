import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '268c5975c9e3ed3242d11248c07d292c',
    language: 'es-ES',
  },
});

export default movieDB;
