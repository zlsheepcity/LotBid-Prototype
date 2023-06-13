//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
import React from 'react'
import Box from '@mui/material/Box';

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
      <NotificationList />
      <Box sx={{height:'98vh'}}></Box>
    </PageContainer>
  )
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const NotificationPage = Page
export default NotificationPage
