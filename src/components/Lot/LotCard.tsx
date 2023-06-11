import React from 'react'

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import WarningIcon from '@mui/icons-material/Warning';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { ILot, emptyLot } from 'Interfaces'
import {
  LotReport,
} from 'Components'



//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
interface IProps {
  lot: ILot;
}
const Component:React.FC<IProps> = ({lot}) => {
  return (
    <Card
      sx={{
        height:'100%',
        display:'flex',
        flexDirection:'column',
      }}>
      <CardMedia
        sx={{
          height:120,
          backgroundColor:'var(--color-secondary)',
        }}
        image={lot.geomapImageSrc}
        title="geo map"
      />
      <LotReport lot={lot} />
      {lot.active && (
      <CardActions sx={{mt:'auto'}}>
        <Button
          size="small"
          startIcon={<OpenInNewIcon />}
          children={'Lot page'}
          />
        <Box sx={{ml:'auto'}}>
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
        </Box>
      </CardActions>
      )}
      {lot.requireUser && (
      <CardActions sx={{mt:'auto'}}>
        <Button
          size="small"
          color="error"
          variant="contained"
          startIcon={<WarningIcon />}
          children={'Your action required'}
          />
      </CardActions>
      )}
    </Card>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LotCard = Component
export default LotCard
