import { Reducer } from 'redux'
import { UserState, UserTypes } from './types'



const initialStateUser: UserState = {
    user: []
}

const reducerUser: Reducer = (state = initialStateUser, action) => {

    switch(action.type) {
        case UserTypes.SET_USER_REQUEST:
            return {
                user: action.payload
            }
        case UserTypes.SET_USER_SUCCESS:
            return {
                user: action.payload
            }
        case UserTypes.SET_USER_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
};


export default reducerUser
