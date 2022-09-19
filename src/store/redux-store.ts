import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "./reducers"
import thunk from 'redux-thunk';

const valueOfLocalStorage = localStorage.getItem('User')

const userInfo = valueOfLocalStorage && valueOfLocalStorage !== null?
    JSON.parse(localStorage.getItem('User')!)
    : undefined

const checkAuth = ()=> {
 if ( valueOfLocalStorage !== null) {
    return true;
 } else {
    return false;
 }
}
const initialState = {
    auth: {
        isAuth: checkAuth(),
        userInfo: userInfo
    } 
} as {}

export const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(thunk)))

export type AppDispatch = typeof store.dispatch;
