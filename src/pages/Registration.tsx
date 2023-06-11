import React from 'react'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Link } from 'Parts/router'
import {
  PageContainer,
  PageHeader,
  LotList,
  LotListActiveNow,
  LotListUserRelated,
  LotRequest,
  RegistrationForm,
  DesignedTitle,
} from 'Components'


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Page:React.FC = () => {
  return (
    <PageContainer>
      <PageHeader />
      <RegistrationForm />
      <Box sx={{height:'75vh'}}></Box>
    </PageContainer>
  )
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const RegistrationPage = Page
export default RegistrationPage
