import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Buttons from './components/buttons.component'

const Home = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [state, setState] = useState({ title: '', types: [], descr: '', colors: {} })

  return (
    <div className="container">
      <h1>Create your Invitation!</h1>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Title" value={title} setValue={setTitle} />
      <Buttons />
      <TextField label="Descr" value={descr} setValue={setDescr} />
      </Box></div>



{/* <TextField
  id="outlined-name"
  label="Name"
  value={name}
  onChange={handleChange}
/>
</Box>
  ) */}
}

export default Home;
