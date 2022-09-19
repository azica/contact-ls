import React from 'react'
import {Grid, Box} from '@mui/material';
import ContactList from '../components/ContactList';


const ContactListPage = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8}>
            <ContactList/>
          </Grid>
        </Grid>
     </Box>
  )
}

export default ContactListPage