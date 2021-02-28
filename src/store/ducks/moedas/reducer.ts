import { Reducer } from 'redux'
import { MoedaState, MoedaTypes } from './types'


const initialStateMoeda: MoedaState = {
    moeda: []
}


const reducerMoeda: Reducer = (state = initialStateMoeda, action) => {

    switch(action.type) {
        case MoedaTypes.SET_MOEDAS_REQUEST:
            return {
                moeda: action.payload
            }
        case MoedaTypes.SET_MOEDAS_SUCCESS:
            return {
                moeda: action.payload
            }
        case MoedaTypes.SET_MOEDAS_FAILURE:
            return {
                ...state
            }
        default: 
            return state
    }
}


export default reducerMoeda

    