import React from 'react'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { ILot, emptyLot } from 'Interfaces'
import {
  LotCard,
  LotReport,
  DesignedTitle,
} from 'Components'
import { TheLots as lots } from 'Src/mocks/lots'


const lot = lots[0]

const Component:React.FC = () => {
  return (
    <Container>
      <DesignedTitle children="Your bids"/>
      <Grid container spacing={3}>
        {lots.map((lot:ILot,indexKey:any)=>(
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={indexKey}>
            <LotCard lot={lot} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LotList = Component
export default LotList
