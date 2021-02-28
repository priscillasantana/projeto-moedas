import { call, put } from "redux-saga/effects"
import moedaService from "../../../services/moedas-service"
import { loadMoedaFailure, loadMoedaSuccess } from "./action"

export function* getMoedas(moeda: any): any {

    try {
        const response: any = yield call(moedaService.getMoeda)
        yield put(loadMoedaSuccess(Object.values(response.data)))

    } catch (err) {
        console.log(err)
        yield put(loadMoedaFailure())
    }
};