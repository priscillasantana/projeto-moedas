import { action } from 'typesafe-actions'
import { UserTypes } from './types'



export const loadUserRequest = () => action(UserTypes.SET_USER_REQUEST)

export const loadUserSuccess = () => (payload: any) => action(UserTypes.SET_USER_SUCCESS, payload)

export const loadUserFailure = () => action(UserTypes.SET_USER_FAILURE)