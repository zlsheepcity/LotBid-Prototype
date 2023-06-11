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

import { ILot, emptyLot } from './interfaces'

//const lot = {
//  ...emptyLot,
//  title: 'Cirsma nr. 17656',
//  place: 'Skujenes pagasts, Vecskujas',
//  volume: 100,
//  distanceUser: 56,
//  bidCurrent: 1240,
//  bidUser: 1240,
//  deadline: '2023.07.02, 08:24',
//}

const LotTitle:React.FC<{lot:ILot}> = ({lot}) => {
  return <span>{`${lot.title}`}</span>
}
const LotPlace:React.FC<{lot:ILot}> = ({lot}) => {
  return (
    <Box
      component="span"
      sx={{
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        overflow:'hidden',
        display:'block',
      }}
      children={`${lot.place}`}
      />
  )
}
const LotVolume:React.FC<{lot:ILot}> = ({lot}) => {
  return (
    <Box
      component="span"
      sx={{whiteSpace:'nowrap'}}
      children={`${lot.volume} m³`}
      />
  )
}
const LotDistance:React.FC<{lot:ILot}> = ({lot}) => {
  return <Box component="span" sx={{whiteSpace:'nowrap'}}>{`${lot.distanceUser} km`}</Box>
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
    <Stack direction="row" component="span">
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
          children={`${lot.bidCurrent}€`}
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
          children={`${lot.bidUser}€`}
          />
      </Stack>
      )}
    </Stack>
  )
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
interface IProps {
  lot: ILot;
}
const Component:React.FC<IProps> = ({lot}) => {
  return (
    <List dense>
      <ListItem>
        <ListItemText
          primary={<LotTitle lot={lot}/>}
          secondary={<LotPlace lot={lot}/>}
          />
        <ListItemText
          sx={{textAlign:'right',alignSelf:'start'}}
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
        {lot.active && (
        <Box sx={{alignSelf:'start'}}>
          <LotCheckTimeUser lot={lot}/>
          <IconButton
             aria-label="refresh"
             size="small"
             children={<CachedIcon fontSize="small" />}
             />
        </Box>
        )}

      </ListItem>
    </List>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LotReport = Component
export default LotReport
