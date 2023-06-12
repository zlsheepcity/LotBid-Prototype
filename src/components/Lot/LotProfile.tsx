import React from 'react'

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import SettingsIcon from '@mui/icons-material/Settings';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { ILot, emptyLot } from 'Interfaces'
import {
  LotCard,
  LotReport,
  DesignedTitle,
} from 'Components'
import { TheLots as lots } from 'Src/mocks/lots'


const lot = lots[3]

const Component:React.FC = () => {
  return (
    <Container sx={{ my:3 }}>
      <DesignedTitle children="Lot page"/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={8} lg={8}>

  <Stack spacing={1}>
  <Skeleton animation={false} />
  <Skeleton animation={false} />
  <Skeleton animation={false} width="60%" />
  <Skeleton animation={false} variant="circular" width={40} height={40}/>
  <Box sx={{height:40}}></Box>
  <Skeleton animation={false} variant="rounded" width={'100%'} height={160}/>
  <Skeleton animation={false} width="60%" />
  <Skeleton animation={false} width="60%" />
  <Skeleton animation={false} width="60%" />
  <Skeleton animation={false} width="60%" />
  <Skeleton animation={false} width="60%" />
  <Box sx={{height:40}}></Box>
  <Box>
  <Grid container spacing={1}>
    <Grid item xs={4}>
      <Skeleton animation={false} variant="rounded" width={'100%'} height={60}/>
    </Grid>
    <Grid item xs={4}>
      <Skeleton animation={false} variant="rounded" width={'100%'} height={60}/>
    </Grid>
    <Grid item xs={4}>
      <Skeleton animation={false} variant="rounded" width={'100%'} height={60}/>
    </Grid>
    <Grid item xs={4}>
      <Skeleton animation={false} variant="rounded" width={'100%'} height={60}/>
    </Grid>
    <Grid item xs={4}>
      <Skeleton animation={false} variant="rounded" width={'100%'} height={60}/>
    </Grid>
    <Grid item xs={4}>
      <Skeleton animation={false} variant="rounded" width={'100%'} height={60}/>
    </Grid>
    <Grid item xs={4}>
      <Skeleton animation={false} variant="rounded" width={'100%'} height={60}/>
    </Grid>
    <Grid item xs={4}>
      <Skeleton animation={false} variant="rounded" width={'100%'} height={60}/>
    </Grid>
  </Grid>
  </Box>
  <Skeleton animation={false} />
  <Skeleton animation={false} />
  <Skeleton animation={false} width="60%" />
  <Skeleton animation={false} variant="circular" width={40} height={40}/>
  </Stack>

        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Stack spacing={3}>

            <Card>
              <CardMedia
                sx={{
                  height:120,
                  backgroundColor:'var(--color-secondary)',
                }}
                image={lot.geomapImageSrc}
                title="geo map"
                />
              <LotReport lot={lot} />
            </Card>

            <Card>
              <CardActions>
                <FormControl fullWidth variant="outlined">
                  <OutlinedInput
                    size="small"
                    id="outlined-max-volume"
                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                    value={lot.bidCurrent + 10}
                  />
                </FormControl>
                 <Button sx={{ml:1}} variant="contained" color="primary">
                   Raise!
                  </Button>
              </CardActions>
              <Divider />
              <CardActions>
                <Button
                  variant="text"
                  size="small"
                  startIcon={<SettingsIcon />}
                  children={'Autobid settings'}
                  />
                <Button
                  variant="text"
                  size="small"
                  startIcon={<ManageSearchIcon />}
                  children={'Bid history'}
                  />
              </CardActions>
            </Card>

            <Card>
              <CardActions>
                <FormControlLabel
                  control={<Switch defaultChecked={lot.notifyUser} />}
                  label={
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      children="Notify"
                      />
                  }

                  />
              </CardActions>
              <Divider />
              <CardActions>
                <Button
                  variant="text"
                  size="small"
                  startIcon={<SettingsIcon />}
                  children={'Notification settings'}
                  />
              </CardActions>
            </Card>

          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LotProfile = Component
export default LotProfile
