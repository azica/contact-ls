

export interface IUser {
    name?: string;
    email?: string;
    password?:string;
}

export interface UserState {
    loading: boolean,
    error: string,
    userInfo: IUser,
    isAuth: boolean
}

export enum UserActionTypes {
    USER_LOGIN_REGISTER = 'USER_LOGIN_REGISTER',
    USER_LOGIN_LOGIN = 'USER_LOGIN_LOGIN',
    USER_LOGIN_LOGOUT= 'USER_LOGIN_LOGOUT',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL = "USER_LOGIN_FAIL"
}
interface UserRegisterAction {
    type: UserActionTypes.USER_LOGIN_REGISTER
    payload: IUser
}
interface  UserLoginAction{
    type: UserActionTypes.USER_LOGIN_LOGIN,
    payload: IUser
}
interface UserLogoutAction {
    type: UserActionTypes.USER_LOGIN_LOGOUT
    payload: boolean
    
}
interface UserFailAction {
    type: UserActionTypes.USER_LOGIN_FAIL
    payload: string
    
}


export type UserActions = 
    UserRegisterAction |
    UserLoginAction |  
    UserLogoutAction | 
    UserFailAction


