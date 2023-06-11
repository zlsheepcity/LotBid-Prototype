import * as React from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import AttachFileIcon from '@mui/icons-material/AttachFile';


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component:React.FC = () => {
  const [skip, setSkip] = React.useState(false)
  const [agree, setAgree] = React.useState(false)
  return (
    <Box sx={{maxWidth:500,py:1}}>
      <Stack direction="column" spacing={2}>
        <TextField disabled={skip} label="Banka" />
        <TextField disabled={skip} label="Banka swift" />
        <TextField disabled={skip} label="Konta numurs" />
        <TextField
          label="Aizpildīt pilnvaru"
          id="outlined-start-adornment"
          helperText="Pievienot aizpildītu un parakstītu pilnvaru Pilnvara ir jāpievieno, lai varētu jūs identificēt kā PVN maksātāju un noformēt pareizu rēķinu."
          InputProps={{
            startAdornment: <AttachFileIcon/>,
          }}
        />
      </Stack>
      <Divider sx={{mt:2}} />
      <FormControlLabel
        label="I Agree"
        control={<Checkbox checked={agree} onChange={()=>setAgree(o=>!o)}/>}
      />
    </Box>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const FormPartPayment = Component
export default FormPartPayment
