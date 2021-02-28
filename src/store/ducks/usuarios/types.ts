export enum UserTypes {
    SET_USER_REQUEST = 'SET_USER_REQUEST',
    SET_USER_SUCCESS = 'SET_USER_SUCCESS',
    SET_USER_FAILURE = 'SET_USER_FAILURE'
}

export interface UserState {
    user: User[]
}

export interface User {
    email: string,
    password: string,
}