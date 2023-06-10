import React from 'react'

import {
  LotReport,
} from 'Components'

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

const Component:React.FC = () => {
  return (
    <Container sx={{ my:3 }}>

      <Typography
        variant="caption"
        component="h2"
        children="Active lots" />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140, background:'hsl( 53, 70%, 76%)' }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <LotReport />
            <CardActions>
              <Button size="small">Open details</Button>
              <Box sx={{ml:'auto'}}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
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
          </Card>

        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140, background:'hsl( 53, 70%, 76%)' }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Box sx={{ml:'auto'}}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
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
          </Card>

        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140, background:'hsl( 53, 70%, 76%)' }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Details</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

        </Grid>
      </Grid>

    </Container>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LotList = Component
export default LotList
