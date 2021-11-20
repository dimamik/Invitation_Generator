import React from 'react'
import { useState } from "react";
import Box from '@mui/material/Box';

import Option from '../components/options.component'
import UserInput from '../components/user-input.component'
import FileChooser from '../components/file-chooser.component'

const Form = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  console.log(title);
  return (
<>
      <h1>Create your Invitation!</h1>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <UserInput label="Title" title={title} setTitle={setTitle}/>
      <Option/>
      <UserInput label="Descr" descr={descr} setDescr={setDescr} />
      <FileChooser/>
      </Box></>
  )
}

export default Form;
