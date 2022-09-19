import React, {SyntheticEvent, useState} from 'react'
import { Typography, Button, Box, TextField } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import MyAlert from './ui/MyAlert';
import { IUser } from '../types/userTypes';

const AuthForm = () => {
  const [authData, setAuthData] = useState<IUser>({name:'', email:'',  password: ''})
  const {isAuth, error} = useTypedSelector(state=>state.auth)
  const {register, login} = useActions()
  let navigate = useNavigate();

  const onChangeHandler =(e:React.ChangeEvent<HTMLInputElement>)=> {
    const {name, value} = e.target
    setAuthData(prevState => ({ ...prevState, [name]: value.trim()}))
  }
 
  const registerHandler = async (e:SyntheticEvent) => {
    e.preventDefault()

    const {name, email, password} = authData;
    register(name!, email!, password!)

    setAuthData({...authData, name: '', email: '',  password: ''})

    navigate('/', { replace: true })
    console.log('ddd')
   
  }
  const loginHandler = async (e:SyntheticEvent)=> {
    const {email, password} = authData;
    login(email!, password!)

    navigate('/', { replace: true })

    setAuthData({...authData, name: '', email: '',  password: ''})
  }
  return (
    <div>
      {error && <MyAlert message={error}/> }
      <Typography 
        textAlign="center"
        variant="h4" 
        component="h4"> 
        Авторизация
      </Typography>
      <Box
        id='formId'
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"

    >
        <TextField 
        size="small"
        onChange={onChangeHandler}
        value={authData.name || ''}
        name="name"
        type="text" 
        label="Name" 
        variant="outlined" />

        <TextField 
        size="small"
        onChange={onChangeHandler}
        value={authData.email}
        name="email"
        type="email" 
        label="Email" 
        variant="outlined" />

         <TextField 
        size="small"
        onChange={onChangeHandler}
        value={authData.password || ''}
        name="password"
        type="password" 
        label="Password" 
        variant="outlined" />

        <Box sx={{ display: 'flex' }}>
          <Button 
          sx={{ flexGrow: 0.5, marginRight: 2 }}
          color="success"
          variant="contained"
          onClick={loginHandler}
          >Войти</Button>

          <Button 
          sx={{ flexGrow: 0.5 }}
          variant="contained"
          onClick={registerHandler}
          >Регистрация</Button>
        </Box>
  </Box>
    </div>
  )
}

export default AuthForm