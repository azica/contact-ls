import React from 'react'
import AuthForm from '../components/AuthForm'
import { Grid, Box} from '@mui/material'
import MyAlert from '../components/ui/MyAlert'
import { useTypedSelector } from '../hooks/useTypedSelector';

const AuthPage = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
           <AuthForm/>
          </Grid>
        </Grid>
    </Box>
  )
}

export default AuthPage