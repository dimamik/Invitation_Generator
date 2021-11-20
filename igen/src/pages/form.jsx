import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Option from '../components/options.component';
import UserInput from '../components/user-input.component';
import FileChooser from '../components/file-chooser.component';
import Buttons from '../components/buttons';

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

const Box = styled.div`
  display: grid;
  grid-gap: 1em;
  width: 50%;
`;

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(new File([], ''));
  const [option, setOption] = useState('');
  console.log(file);
  return (
    <Container>
      <Title>Invitation Generator</Title>
      <Box>
        <UserInput label="Title" title={title} setTitle={setTitle} />
        <Option option={option} setOption={setOption} />
        <UserInput
          label="Description"
          title={description}
          setTitle={setDescription}
        />
        <FileChooser file={file} setFile={setFile} />
        <Buttons file={file} title={title} description={description} />
      </Box>
    </Container>
  );
};

export default Form;
