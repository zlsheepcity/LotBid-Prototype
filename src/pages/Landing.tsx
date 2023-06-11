import React from 'react'
import Box from '@mui/material/Box';
import { Link } from 'Parts/router'
import {
  PageContainer,
  PageHeader,
  LotList,
  LotListActiveNow,
  LotListUserRelated,
  LotRequest,
} from 'Components'


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Page:React.FC = () => {
  return (
    <PageContainer>
      <PageHeader />
      <LotListUserRelated />
      <LotListActiveNow />
      <LotRequest />
      <Box sx={{height:'25vh'}}></Box>
    </PageContainer>
  )
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LandingPage = Page
export default LandingPage
