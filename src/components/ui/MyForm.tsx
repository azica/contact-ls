import React, { useState } from "react";
import { TextField, Box, Button} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useActions } from "../../hooks/useActions";
import MyAlert from "./MyAlert";
import { useInput } from '../../hooks/useInput';


interface Props {handleClose:any }

const MyForm: React.FC<Props> = ({ handleClose }) => {
  const { addNewContact } = useActions();

  const name = useInput('', {isEmpty: true, minLength: 2})
  const email = useInput('', {isEmpty: true, minLength: 5, isEmail: true})
  const phone = useInput('', {isEmpty: true, isPhone: true, minLength: 9 })

 
  const submitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
      addNewContact({name:name.value, email:email.value, phone:phone.value});
    handleClose();
  };

  return (
    <>
      
      <Box
        component="form"
        onSubmit={submitHandler}
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        {(name.isDirty && name.isEmpty) && <MyAlert message="Поле не может быть пустым" />}
        {(name.isDirty && name.minLengthError) && <MyAlert message="Поле не может быть коротким" />}
        <TextField
          required
          size="small"
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
          name="name"
          type="text"
          label="Name"
          variant="outlined"
        />
        {(email.isDirty && email.isEmpty) && <MyAlert message="Поле не может быть пустым" />}
        {(email.isDirty && email.emailError) && <MyAlert message="Введите корректный имейл" />}
        <TextField
          required
          size="small"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          name="email"
          type="email"
          label="Email"
          variant="outlined"
        />
        {(phone.isDirty && phone.isEmpty) && <MyAlert message="Поле не может быть пустым" />}
        {(phone.isDirty && phone.phoneError) && <MyAlert message="Введите корректный номер" />}

        <TextField
          required
          size="small"
          value={phone.value}
          onChange={phone.onChange}
          onBlur={phone.onBlur}
          name="phone"
          type="number"
          label="phone"
          variant="outlined"
        />
        
        
        {/* <Button 
          startIcon={<PhotoCamera />}
          variant="outlined" 
          component="label">
          Add Image
          <input hidden 
          accept="image/*,.png,.jpg" 
          multiple 
          type="file"
          />
      </Button> */}
        <Button 
          type="submit" 
          variant="contained" 
          disabled={!email.validInput}
          >
          Add Contact
        </Button>
      </Box>
    </>
  );
};

export default MyForm;
