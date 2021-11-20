import React from 'react';
import { Button } from '@mui/material';

const FileChooser = ({ setFile }) => {
  return (
    <>
      <Button
        variant="contained"
        component="label"
        onClick={() => {
          const input = document.createElement('input');
          input.type = 'file';
          input.addEventListener('change', () => {
            setFile(input.files?.item(0));
          });
          input.click();
        }}
      >
        Upload File
      </Button>
    </>
  );
};

export default FileChooser;
