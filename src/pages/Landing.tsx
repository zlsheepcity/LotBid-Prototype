import React from 'react'
import { Link } from 'Parts/router'
import {
  PageContainer,
  PageHeader,
  LotList,
} from 'Components'


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Page:React.FC = () => {
  return (
    <PageContainer>
      <PageHeader />
      <LotList />
    </PageContainer>
  )
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LandingPage = Page
export default LandingPage
