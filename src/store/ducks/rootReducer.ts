import { combineReducers } from 'redux'
import reducerMoeda from './moedas/reducer'

const createRootReducer = () => combineReducers({
    reducerMoeda
})

export default createRootReducer