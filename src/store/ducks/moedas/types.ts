export enum MoedaTypes {
    SET_MOEDAS_REQUEST = 'SET_MOEDAS_REQUEST',
    SET_MOEDAS_SUCCESS = 'SET_MOEDAS_SUCCESS',
    SET_MOEDAS_FAILURE = 'SET_MOEDAS_FAILURE'
}

export interface MoedaState {
    moeda: Moeda[]
}

export interface Moeda {
    currency_code: string
    name: string,
    symbol: string,
    country_code: string,
    country_name: string
}
