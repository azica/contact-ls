import { Dispatch } from "redux"
import axios from 'axios'
import { UserActions, UserActionTypes } from '../../types/userTypes';

const url = process.env.REACT_APP_DB_URL

export const register = (name:string, email:string, password: string) => {
 return async (dispatch:Dispatch<UserActions>)=> {
        try {
        const response = await axios.post(
          `${url}users/register`,
             JSON.stringify({name, email, password }),
              {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
              }
        )
          const data = await response.data
        
          localStorage.setItem('User', JSON.stringify(data.user))

          dispatch({type: UserActionTypes.USER_LOGIN_REGISTER, payload: data.user})

        } catch (e:any) {
          const error = e.response.data
           dispatch({type: UserActionTypes.USER_LOGIN_FAIL, payload: error})
        } 
 }
}
export const login = (email:string, password: string) => {
  return async (dispatch:Dispatch<UserActions>)=> {
         try {
           const res = await axios.post(
            `${url}signin`,
             JSON.stringify({email, password }),
              {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
              }
           );
           const data = await res.data;
           localStorage.setItem('User', JSON.stringify(data.user))

           dispatch({type: UserActionTypes.USER_LOGIN_LOGIN, payload:res.data.user})

         } catch (e:any) {
           const error = e.response.data
           dispatch({type: UserActionTypes.USER_LOGIN_FAIL, payload: error})
 
         } 
  }
 }
export const logout = (auth:boolean) => {
  return async (dispatch:Dispatch<UserActions>)=> {
      localStorage.removeItem('User')
      dispatch({type: UserActionTypes.USER_LOGIN_LOGOUT, payload: auth})
  }
 }