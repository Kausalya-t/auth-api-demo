import axios from 'axios'

export const dataClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})