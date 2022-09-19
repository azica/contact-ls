import React, {useState, useEffect} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useSort } from '../hooks/useSort';
import MyTable from './ui/MyTable';
import {Button} from '@mui/material';
import MyModal from './ui/MyModal';
import { useActions } from '../hooks/useActions';
import SearchInput from './ui/SearchInput';


const ContactList:React.FC = () => {
  const { contacts, sort} = useTypedSelector(state=>state.contacts)
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const sortedAndSearchedItems = useSort(contacts, filter.sort, filter.query)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const { fetchContacts} = useActions()

  useEffect(()=>{
    fetchContacts()
  }, [])

  return (
   <>
      <Button variant="outlined" onClick={handleOpen}>Add New Contact</Button>
      <MyModal handleClose={handleClose} open={open}/>
      <SearchInput setFilter={setFilter} filter={filter}/>
      <MyTable 
          sort={sort}
          sortedAndSearchedItems={sortedAndSearchedItems} 
          setFilter={setFilter}
          filter={filter}
          
      />
   
   </>
  )
}

export default ContactList