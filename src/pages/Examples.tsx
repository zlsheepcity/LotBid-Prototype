//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
import React from 'react'

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
import { Link } from 'Parts/router'
import {
  PageContainer,
  PageHeader,
  NotificationList,
} from 'Components'


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Page:React.FC = () => {
  return (
    <PageContainer>
      <PageHeader />
      <Container>
        <Typography variant="h5" children="Auction example"/>
        <Typography variant="body2" children="Source: hattrick.org (game manager)"/>
        <Typography variant="body2" children="Exp: 25 Years, 147 Countries, 14M Total users"/>
        <Stack spacing={2}>
          <Box sx={{my:1,border:'4px solid var(--color-primary)'}}><img src="./bidsystem-hattrick-a.png" alt=""/></Box>
          <Box sx={{my:1,border:'4px solid var(--color-primary)'}}><img src="./bidsystem-hattrick-b.png" alt=""/></Box>
          <Box sx={{my:1,border:'4px solid var(--color-primary)'}}><img src="./bidsystem-hattrick-c.png" alt=""/></Box>
        </Stack>
      </Container>
      <Box sx={{height:'50vh'}}></Box>
    </PageContainer>
  )
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const ExamplesPage = Page
export default ExamplesPage
