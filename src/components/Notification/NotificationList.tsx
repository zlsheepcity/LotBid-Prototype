//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

import React from 'react'
import { Link } from 'Parts/router'

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Pagination from '@mui/material/Pagination';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import EuroIcon from '@mui/icons-material/Euro';

import CommentIcon from '@mui/icons-material/Comment';
import FolderIcon from '@mui/icons-material/Folder';
import WarningIcon from '@mui/icons-material/Warning';
import SettingsIcon from '@mui/icons-material/Settings';

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

import {
  DesignedTitle,
} from 'Components'

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

const items = [
  {
    primary: (
      <Box>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{fontWeight:'bolder',mr:1}}
          children={'Lot won!'}
          />
        <Typography
          variant="body2"
          component="span"
          sx={{color:'var(--color-negative)'}}
          children={'Payment action required'}
          />
      </Box>
    ),
    secondary: (
      <Box>
        <Typography
          variant="caption"
          component="span"
          children={'2023.07.01 14:35'}
          />
      </Box>
    ),
    action: (
      <Box>
        <IconButton edge="end" aria-label="comments">
          <WarningIcon color="error" />
        </IconButton>
        <IconButton edge="end" aria-label="comments">
          <EuroIcon color="error" />
        </IconButton>
      </Box>
    ),
  },
  {
    primary: (
      <Box>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{fontWeight:'bolder',mr:1}}
          children={'New lot match!'}
          />
        <Typography
          variant="body2"
          component="span"
          children={'100m³, 26km'}
          />
      </Box>
    ),
    secondary: (
      <Box>
        <Typography
          variant="caption"
          component="span"
          children={'2023.07.01 11:12'}
          />
      </Box>
    ),
    action: (
      <></>
    ),
  },
  {
    primary: (
      <Box>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{fontWeight:'bolder',mr:1}}
          children={'Lot deadline reminder!'}
          />
        <Typography
          variant="body2"
          component="span"
          children={'1hr left'}
          />
      </Box>
    ),
    secondary: (
      <Box>
        <Typography
          variant="caption"
          component="span"
          children={'2023.07.01 11:01'}
          />
      </Box>
    ),
    action: (
      <></>
    ),
  },
  {
    primary: (
      <Box>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{fontWeight:'bolder',mr:1}}
          children={'Auto bid!'}
          />
        <Typography
          variant="body2"
          component="span"
          sx={{color:'var(--color-positive)'}}
          children={'1030€'}
          />
      </Box>
    ),
    secondary: (
      <Box>
        <Typography
          variant="caption"
          component="span"
          children={'2023.07.01 08:52'}
          />
      </Box>
    ),
    action: (
      <IconButton edge="end" aria-label="comments">
        <SettingsIcon/>
      </IconButton>
    ),
  },
  {
    primary: (
      <Box>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{fontWeight:'bolder',mr:1}}
          children={'Someone bid!'}
          />
        <Typography
          variant="body2"
          component="span"
          sx={{color:'var(--color-negative)'}}
          children={'1020€'}
          />
      </Box>
    ),
    secondary: (
      <Box>
        <Typography
          variant="caption"
          component="span"
          children={'2023.07.01 08:52'}
          />
      </Box>
    ),
    action: (
      <></>
    ),
  },
  {
    primary: (
      <Box>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{fontWeight:'bolder',mr:1}}
          children={'Auto bid!'}
          />
        <Typography
          variant="body2"
          component="span"
          sx={{color:'var(--color-positive)'}}
          children={'1010€'}
          />
      </Box>
    ),
    secondary: (
      <Box>
        <Typography
          variant="caption"
          component="span"
          children={'2023.07.01 08:52'}
          />
      </Box>
    ),
    action: (
      <IconButton edge="end" aria-label="comments">
        <SettingsIcon/>
      </IconButton>
    ),
  },
  {
    primary: (
      <Box>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{fontWeight:'bolder',mr:1}}
          children={'Someone bid!'}
          />
        <Typography
          variant="body2"
          component="span"
          sx={{color:'var(--color-negative)'}}
          children={'1000€'}
          />
      </Box>
    ),
    secondary: (
      <Box>
        <Typography
          variant="caption"
          component="span"
          children={'2023.07.01 08:52'}
          />
      </Box>
    ),
    action: (
      <></>
    ),
  },
]

const folders = ['All (124)','Payment requests (1)','Bid reports (71)','New lots (2)', 'Archieved (80)']

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
interface IProps {
}
const Component:React.FC<IProps> = ({}) => {
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <Container>
      <DesignedTitle children={`Notifications list`}/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <List sx={{ width: '100%' }}>
            {folders.map(
              (folder,indexKey)=> (
                <ListItem key="indexKey" selected={!indexKey}>
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon><FolderIcon /></ListItemIcon>
                    <ListItemText primary={folder}/>
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{my:2}} />
        <Grid item xs={12} sm={7}>
          <List sx={{ width: '100%' }}>
            {items.map((item, value) => {
              const labelId = `checkbox-list-label-${value}`;
              return (
                <ListItem
                  key={value}
                  secondaryAction={item.action}
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={item.primary}
                      secondary={item.secondary}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Pagination count={10} shape="rounded" />
        </Grid>
      </Grid>



    </Container>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const NotificationList = Component
export default NotificationList
