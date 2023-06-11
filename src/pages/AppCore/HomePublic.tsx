import React from 'react'
import { Link } from 'Parts/router'
import { PageContainer } from 'Components'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Page:React.FC = () => {
  return (
    <PageContainer>
      HomePublicPage
      <ul>
        <li><Link to="/landing">/landing</Link></li>
        <li><Link to="/registration">/registration</Link></li>
      </ul>
    </PageContainer>
  )
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const HomePublic = Page
export default HomePublic
