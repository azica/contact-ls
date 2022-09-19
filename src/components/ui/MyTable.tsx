import React, {useEffect} from 'react'
import {TableContainer, Slide, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip} from '@mui/material';
import { IContactList } from '../../types/contactsTypes';
import DeleteIcon from '@mui/icons-material/Delete';
import SortIcon from '@mui/icons-material/Sort';
import { useActions } from '../../hooks/useActions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

type Props = {
  sort: string[],
  sortedAndSearchedItems: IContactList[],
  setFilter: any,
  filter: object
};
const MyTable:React.FC<Props> = ({sort, sortedAndSearchedItems, setFilter, filter }) => {
  

  const {deleteContact, fetchContacts} = useActions()
    
  const deleteHandler = (row: IContactList) => {
    deleteContact(row)
    fetchContacts()
  }
  return (
    <TableContainer>
    <Table sx={{ minWidth: 650, marginTop: 4}} aria-label="customized table">
      <TableHead  style={{background: "grey"}}>
        <TableRow>
          {sort.map(item=>
            <TableCell 
              style={{color: "#fff", fontWeight: 600}}
              key={item} align="center" 
              onClick={(e)=>{
                return setFilter({...filter, sort: item})
              }}
              className='table-head'
              >{item}
              
              <IconButton>
                  <SortIcon style={{color: "#fff"}}/>
              </IconButton>
              
            </TableCell>)}
            <TableCell/>
        </TableRow>
      </TableHead>
     


      <TransitionGroup component={TableBody}>
        {sortedAndSearchedItems.map((row: IContactList, index) => (
             <CSSTransition
                  key={index}
                  timeout={500}
                  classNames={'el'}
                >
            <TableRow
              hover
              className="el"
            >
              <TableCell align="center">{index+1}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              
              <TableCell align="right">
                <Tooltip title="Delete">
                  <IconButton onClick={()=>deleteHandler(row)}>
                      <DeleteIcon />
                  </IconButton>
                  </Tooltip>
                </TableCell>
            </TableRow>
            </CSSTransition>
        ))}


        </TransitionGroup>


    </Table>
  </TableContainer>
  )
}

export default MyTable