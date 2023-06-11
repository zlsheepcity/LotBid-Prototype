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

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component:React.FC = () => {
  const [skip, setSkip] = React.useState(false)
  return (
    <Box sx={{maxWidth:500,py:1}}>
      <FormControlLabel
        label="Register as private preson"
        control={<Checkbox checked={skip} onChange={()=>setSkip(o=>!o)} />}
      />
      <Divider sx={{mb:2}} />
      <Stack direction="column" spacing={2}>
        <TextField disabled={skip} label="Company name" />
        <TextField disabled={skip} label="Reģistrācijas numurs" />
        <TextField disabled={skip} label="PVN maksātāja numurs" />
        <TextField disabled={skip} label="Juridiskā adrese"
          multiline
          maxRows={4}
          />
        <FormControl fullWidth disabled={skip}>
          <InputLabel id="demo-simple-select-label">Valsts</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="lv"
            label="Valsts"
          >
            <MenuItem value={'lv'}>Latvia</MenuItem>
            <MenuItem value={'lt'}>Lithuania</MenuItem>
            <MenuItem value={'pl'}>Poland</MenuItem>
          </Select>
        </FormControl>
        <TextField disabled={skip} label="Pilsēta/Novads" />
        <TextField disabled={skip} label="Pasta indekss" />
      </Stack>
    </Box>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const FormPartCompany = Component
export default FormPartCompany
