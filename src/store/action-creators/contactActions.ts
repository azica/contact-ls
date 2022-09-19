import { Dispatch } from "redux"
import { ContactAction, ContactListActionTypes, IContactList} from "../../types/contactsTypes"
import axios from 'axios'


const url = process.env.REACT_APP_DB_URL

export const addNewContact = ({name, email, phone, image}: IContactList) => {
 return async (dispatch:Dispatch<ContactAction>)=> {
  
console.log(name, email, phone, image)
   const response = await axios.post(`${url}contacts`, {name, email, phone, image})
    dispatch({type: ContactListActionTypes.ADD_NEW_CONTACT, payload:response.data})
 }
}

export const fetchContacts = () => {
   return async(dispatch:Dispatch<ContactAction>)=> {
      const response = await axios.get(`${url}contacts`)
      dispatch({type: ContactListActionTypes.FETCH_CONTACTS, payload: response.data})
   }
}

export const deleteContact = (row:IContactList) => {
   const {id} = row
   return async (dispatch:Dispatch<ContactAction>)=> {
     const response = await axios.delete(`${url}contacts/${id}`)

      dispatch({type: ContactListActionTypes.DELETE_CONTACT})
     
   }
  }