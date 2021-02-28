import { apiMoedas } from './api'

const moedaService = {
    getMoeda: () => apiMoedas.get('/currencies.json')
}

export default moedaService 