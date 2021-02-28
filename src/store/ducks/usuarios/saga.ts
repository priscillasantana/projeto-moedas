import { call, put } from 'redux-saga/effects'
import usuarioService from '../../../services/usuarios-services'
import { loadUserFailure, loadUserRequest } from './action'



export function* getUsuarios(user: any): any {
    console.log(user.payload, 'saga')
    try {
        const response: any = yield call(usuarioService.setUsuario)
        yield put(loadUserRequest())
        console.log(response)
    } catch (err) {
        console.log(err)
        yield put(loadUserFailure())
    }
}