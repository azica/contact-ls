import { combineReducers } from 'redux'
import contactListReducers from './contactList-reducers'
import userReducer from './user-reducer';


export const rootReducer = combineReducers(
    {
        contacts: contactListReducers,
        auth: userReducer
    
    }
   
)

export type RootState = ReturnType<typeof rootReducer> 
