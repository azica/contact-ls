
import { ContactListState, ContactAction, ContactListActionTypes, IContactList } from '../../types/contactsTypes'


let initialState:ContactListState = {
    contacts: [],
    sort: ['id','name','email','phone'],
    loading: false,
    error: null
}

const contactListReducers =(state = initialState, action: ContactAction): ContactListState => {
    switch(action.type) {
            case ContactListActionTypes.FETCH_CONTACTS: 
                return {
                    ...state,
                    contacts: action.payload,
                }
            case ContactListActionTypes.ADD_NEW_CONTACT:
                return {
                    ...state,
                    contacts:[...state.contacts, action.payload]
                }
            case ContactListActionTypes.DELETE_CONTACT:
                return {
                    ...state,
                    
                }
        default: 
            return state;
    }
}




export default contactListReducers;