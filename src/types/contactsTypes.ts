
export interface IContactList {
    id?: number,
    name: string,
    phone: string,
    email: string,
    image?: string
}
export interface ContactListState {
    contacts: IContactList[];
    sort: string[];
    loading?: boolean;
    error?: null | string;
} 
export enum ContactListActionTypes {
    FETCH_CONTACTS = 'FETCH_CONTACTS',
    ADD_NEW_CONTACT = 'ADD_NEW_CONTACT',
    DELETE_CONTACT = 'DELETE_CONTACT'
    
}

interface FetchContactsAction {
    type: ContactListActionTypes.FETCH_CONTACTS;
    payload: IContactList[];
}

interface AddNewContact {
    type: ContactListActionTypes.ADD_NEW_CONTACT;
    payload: IContactList;
}
interface DeleteContact {
    type: ContactListActionTypes.DELETE_CONTACT;
   
}

export type ContactAction = FetchContactsAction | AddNewContact | DeleteContact
