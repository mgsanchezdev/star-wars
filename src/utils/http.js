import axios from 'axios';

export const baseURL = 'https://swapi.dev/api/people/';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
