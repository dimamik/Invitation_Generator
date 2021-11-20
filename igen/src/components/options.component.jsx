import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const types = ['Birthday', 'Marriage', 'New Year', 'Christmas'];

const Option = ({ option, setOption }) => {
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Invitation Theme</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Invitation Theme"
          onChange={handleChange}
        >
          {types.map((type) => (
            <MenuItem value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Option;
