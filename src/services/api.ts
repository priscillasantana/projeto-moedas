import axios from 'axios'

export const apiMoedas = axios.create({
    baseURL: 'https://v2.api.forex/infos'
});

export const apiFake = axios.create({
    baseURL: 'http://localhost:4000/'
});

