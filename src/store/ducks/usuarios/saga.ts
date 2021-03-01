import { call, put } from 'redux-saga/effects'
import usuarioService from '../../../services/usuarios-services'
import { loadUserFailure, loadUserSuccess } from './action'



export function* getUsuarios(user: any): any {
    console.log(user.payload, 'saga')
    try {
        const response: any = yield call(usuarioService.setUsuario)
        yield put(loadUserSuccess(response.data))
        console.log(response.data, 'saga user')
    } catch (err) {
        console.log(err)
        yield put(loadUserFailure())
    }
}