import React from 'react'
import TextField from '@mui/material/TextField';

const UserInput = ({title, setTitle}) => {

  return (
      <TextField label="Title" value={title} setValue={setTitle}/>
  )
}

export default UserInput;
