import React from 'react'
import { Link } from 'Parts/router'
import { PageContainer } from 'Components'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Page:React.FC = () => {
  return (
    <PageContainer>
      Landing
      <ul>
        <li><Link to="/">/home</Link></li>
      </ul>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </PageContainer>
  )
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LandingPage = Page
export default LandingPage
