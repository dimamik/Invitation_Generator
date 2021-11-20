import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const Field = styled(TextField)`
  && { 
    width: 100%;
  }
`

const UserInput = ({ title, setTitle }) => {
  return <Field label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />;
};

export default UserInput;
