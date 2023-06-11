import React from 'react'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import CachedIcon from '@mui/icons-material/Cached';
import CircleIcon from '@mui/icons-material/Circle';

import { IObject as IO } from 'Interfaces'
export interface ILot extends IO {
  title: string; //'Cirsma nr. 17656'
  place: string; //'Skujenes pagasts, Vecskujas'
  volume: number; //m³
  bidCurrent: number; //€
  deadline: string; //Date
  active: boolean;
  distanceUser: number; //km
  checkTimeUser: string; //Date
  bidUser: number; //€
}
export const emptyLot:ILot = {
  title: '',
  place: '',
  volume: 0,
  distanceUser: 0,
  bidCurrent: 0,
  bidUser: 0,
  deadline: '',
  checkTimeUser: '',
  active: false,
}

const lot = {
  ...emptyLot,
  title: 'Cirsma nr. 17656',
  place: 'Skujenes pagasts, Vecskujas',
  volume: 100,
  distanceUser: 56,
  bidCurrent: 1240,
  bidUser: 1240,
  deadline: '2023.07.02, 08:24',
  checkTimeUser: '07:40',
  active: true,
}

const LotTitle:React.FC<{lot:ILot}> = ({lot}) => {
  return <span>{`${lot.title}`}</span>
}
const LotPlace:React.FC<{lot:ILot}> = ({lot}) => {
  return <span>{`${lot.place}`}</span>
}
const LotVolume:React.FC<{lot:ILot}> = ({lot}) => {
  return <span>{`${lot.volume} m³`}</span>
}
const LotDistance:React.FC<{lot:ILot}> = ({lot}) => {
  return <span>{`${lot.distanceUser} km`}</span>
}
const LotCheckTimeUser:React.FC<{lot:ILot}> = ({lot}) => {
  return (
    <Typography
      variant="caption"
      children={`${lot.checkTimeUser}`}
      sx={{opacity:0.5}}
      />
  )
}
const LotDeadline:React.FC<{lot:ILot}> = ({lot}) => {
  return (
    <Stack direction="row">
      <Typography
        variant="caption"
        children="deadline:"
        sx={{mr:1}}/>
      <Typography
        variant="caption"
        children={`${lot.deadline}`}
        />
    </Stack>
  )
}
const LotBid:React.FC<{lot:ILot}> = ({lot}) => {
  const bidUserExist = lot.bidUser > 0
  const bidUserWinning = lot.bidUser > 0 && lot.bidUser===lot.bidCurrent
  const sxCurrent = bidUserWinning? {
    color: 'var(--color-positive)',
    fontWeight: 'bolder',
  }:{}
  const sxUser = bidUserWinning? {
    color: 'var(--color-positive)',
    fontWeight: 'bolder',
  }:{
    color: 'var(--color-negative)',
    fontWeight: 'bolder',
  }
  return (
    <Stack direction="column">
      <Stack direction="row">
        <Typography
          variant="caption"
          children="current bid:"
          sx={{mr:1}}/>
        <Typography
          sx={sxCurrent}
          variant="caption"
          children={`€${lot.bidCurrent}`}
          />
      </Stack>
      {bidUserExist && (
      <Stack direction="row">
        <Typography
          variant="caption"
          children="your bid:"
          sx={{mr:1}}/>
        <Typography
          sx={sxUser}
          variant="caption"
          children={`€${lot.bidUser}`}
          />
      </Stack>
      )}
    </Stack>
  )
}

const Component:React.FC = () => {
  return (
    <List dense>
      <ListItem>
        <ListItemText
          primary={<LotTitle lot={lot}/>}
          secondary={<LotPlace lot={lot}/>}
          />
        <ListItemText
          sx={{textAlign:'right'}}
          primary={<LotVolume lot={lot}/>}
          secondary={<LotDistance lot={lot}/>}
          />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary={<LotBid lot={lot}/>}
          secondary={<LotDeadline lot={lot}/>}
          />
        <Box sx={{alignSelf:'start'}}>
          <LotCheckTimeUser lot={lot}/>
          <IconButton
             aria-label="refresh"
             size="small"
             children={<CachedIcon fontSize="small" />}
             />
        </Box>

      </ListItem>
    </List>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LotReport = Component
export default LotReport
