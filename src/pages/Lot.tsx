import React from 'react'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import {
  PageContainer,
  PageHeader,
  DesignedTitle,
  LotProfile,
} from 'Components'


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Page:React.FC = () => {
  return (
    <PageContainer>
      <PageHeader />
      <LotProfile />
      <Box sx={{height:'25vh'}}></Box>
    </PageContainer>
  )
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LotPage = Page
export default LotPage
