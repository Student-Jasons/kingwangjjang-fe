import axios from 'axios';

import { API_URL } from '../constants';

export const restApi = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    responseType: 'json',
    withCredentials: true,
});