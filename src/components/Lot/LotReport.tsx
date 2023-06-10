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

const lot = {
  title: 'Cirsma nr. 1765',
  place: 'Skujenes pagasts, Vecskujas',
  value: 100,
  distance: 56,
}

const Component:React.FC = () => {
  return (
    <List dense>
      <ListItem>
        <ListItemText
          primary={lot.title}
          secondary={lot.place}
          />
        <ListItemText
          sx={{textAlign:'right'}}
          primary={`${lot.value} m³`}
          secondary={`${lot.distance} km`}
          />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary={
            <Stack direction="row">
              <Typography
                variant="caption"
                children="current bid:"
                />
            </Stack>
          }
          secondary={
            <Stack direction="row">
              <Typography
                variant="caption"
                children="deadline:"
                />
            </Stack>
          }
          />
        <IconButton
           aria-label="refresh"
           size="small"
           sx={{alignSelf:'start'}}
           children={<CachedIcon fontSize="small" />}
           />
      </ListItem>
    </List>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LotReport = Component
export default LotReport
