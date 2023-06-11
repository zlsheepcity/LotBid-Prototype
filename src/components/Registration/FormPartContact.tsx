import * as React from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component:React.FC = () => {
  return (
    <Box sx={{maxWidth:500,py:1}}>
      <Stack direction="column" spacing={1}>
        <TextField variant="outlined" label="First name" />
        <TextField variant="outlined" label="Second name" />
        <TextField variant="outlined" label="Email" />
        <TextField variant="outlined" label="Phone" />
      </Stack>
    </Box>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const FormPartContact = Component
export default FormPartContact
