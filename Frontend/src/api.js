import axios from 'axios';

const API = axios.create({ basseURL: 'http:localhost:5000/api'});

 export const fetchProduct = () => API.get('/products')