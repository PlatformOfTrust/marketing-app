import React from 'react'
import styled from 'styled-components'

// import ToolsNav from './ToolsNav';
import SiteNav from './SiteNav';
import AppsNav from './AppsNav';
import { device } from '../Theme.js'

const StyledDeskMenu = styled.div`
  display: none;
  @media ${device.tablet}{ 
    display: inline-block; 
    vertical-align: bottom;
    margin-left: 2rem;
  }
`
const DeskMenu = () => (
  <StyledDeskMenu>
    {/* <ToolsNav></ToolsNav> */}
    <AppsNav></AppsNav>
    <SiteNav></SiteNav>
  </StyledDeskMenu>
)

export default DeskMenu
