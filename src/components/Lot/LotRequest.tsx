import React from 'react'

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import SettingsIcon from '@mui/icons-material/Settings';

import { ILot, emptyLot } from 'Interfaces'
import {
  LotCard,
  LotReport,
  DesignedTitle,
} from 'Components'

import { TheLots as lotsAll } from 'Src/mocks/lots'
const lots = lotsAll.filter((O:ILot)=>O.active)

const Component:React.FC = () => {
  return (
    <Container sx={{ my:3 }}>
      <DesignedTitle children={`Search or request`}/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} xl={6}>

        <Grid container spacing={1}>
        <Grid item xs={6}>
        <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="outlined-min-volume">Min volume</InputLabel>
          <FilledInput
            id="outlined-max-volume"
            startAdornment={<InputAdornment position="start">m³</InputAdornment>}
            value="110"
          />
        </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="outlined-max-volume">Max volume</InputLabel>
          <FilledInput
            id="outlined-max-volume"
            startAdornment={<InputAdornment position="start">m³</InputAdornment>}
            value="110"
          />
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="outlined-max-volume">Max current bid</InputLabel>
          <FilledInput
            id="outlined-max-volume"
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            value="1000"
          />
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="outlined-max-volume">Max distance from your base</InputLabel>
          <FilledInput
            id="outlined-max-volume"
            startAdornment={<InputAdornment position="start">km</InputAdornment>}
          />
        </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{mt:2}}>
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddAlertIcon />}
            children={'Notify me new lot match'}
            />
          <Button
            startIcon={<SettingsIcon />}
            children={'Notification settings'}
            />
          </Stack>
        </Grid>
        </Grid>

        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={4}>

          <Card>
            <CardContent>
              <Typography
                variant="overline"
                children={'Found in active lots (1)'}
                />
            </CardContent>
            <MenuList>
              <Divider/>
              <MenuItem>
                <ListItemText
                  primary={'Cirsma nr. 797, 800€'}
                  secondary={'95 m³, 20 km, deadline: 2023.07.03, 16:10'}
                  />
              </MenuItem>
            </MenuList>
          </Card>

        </Grid>
      </Grid>
    </Container>
  );
}


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LotRequest = Component
export default LotRequest
