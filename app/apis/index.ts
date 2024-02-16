import axios from 'axios';

import { API_URL } from '../constants';

const restApi = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
    },
    responseType: 'json',
    withCredentials: true,
});