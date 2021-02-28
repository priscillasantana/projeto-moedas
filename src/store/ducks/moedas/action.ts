import { action } from 'typesafe-actions'
import { MoedaTypes } from './types'

export const loadMoedaRequest = () => action(MoedaTypes.SET_MOEDAS_REQUEST)

export const loadMoedaSuccess = (payload: any) => action(MoedaTypes.SET_MOEDAS_SUCCESS, payload)

export const loadMoedaFailure = () => action(MoedaTypes.SET_MOEDAS_FAILURE)
