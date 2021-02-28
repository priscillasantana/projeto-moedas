import { takeLatest, all } from 'redux-saga/effects'
import { MoedaTypes } from './moedas/types'
import { getMoedas } from './moedas/saga'

export default function* rootSaga(): any{
    return yield all([
        takeLatest(MoedaTypes.SET_MOEDAS_REQUEST, getMoedas)
    ])
}
