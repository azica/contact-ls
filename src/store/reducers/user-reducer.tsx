import { UserActions, UserState, UserActionTypes } from "../../types/userTypes"



let initialState: UserState = {
    loading: false,
    error: '',
    isAuth: false,
    userInfo: {}
}

const userLoginReducer = (state=initialState, action:UserActions):UserState => {
    switch (action.type) {
        case UserActionTypes.USER_LOGIN_REGISTER:
            return {
                ...state,
                isAuth: true,
                userInfo: action.payload
             }
        case UserActionTypes.USER_LOGIN_LOGIN:
            return {
                ...state,
                isAuth: true,
                userInfo: action.payload
                }
        case UserActionTypes.USER_LOGIN_LOGOUT: 
             return {
                ...state,
                loading: false,
                isAuth: action.payload,
                userInfo: {name: '', email: ''}
            }

        case UserActionTypes.USER_LOGIN_FAIL: 
            return {
                 ...state,
                error: action.payload
            }

        default: 
            return state;
        
    }
}

export default userLoginReducer