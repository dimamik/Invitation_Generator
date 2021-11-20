import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Option from '../components/options.component';
import UserInput from '../components/user-input.component';
import FileChooser from '../components/file-chooser.component';

const Container = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: Ubuntu, Roboto, sans-serif;
  font-size: 64px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 132px;
`;

<<<<<<< HEAD
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
=======
const Box = styled.div`
  display: grid;
  grid-gap: 1em;
  width: 50%;
`;

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(new File([], ''));
  console.log(file);
  return (
    <Container>
      <Title>Invitation Generator</Title>
      <Box>
        <UserInput label="Title" title={title} setTitle={setTitle} />
        <Option />
        <UserInput
          label="Description"
          title={description}
          setTitle={setDescription}
        />
        <FileChooser file={file} setFile={setFile} />
      </Box>
    </Container>
  );
};
>>>>>>> c3ec232e92b3830bd7d8c9e10c03f7836d4c32bd

export default Form;
