import React from 'react'
import styled from 'styled-components'

import SavedViz from './SavedViz'

import { device } from '../Theme.js'

const StyledSavedVizs = styled.section`
display: flex;
flex-direction: column;
width: 100%;
margin: 0;
@media ${device.tablet} {
  flex-direction: row;
  flex-wrap: wrap;
  // padding: 0;
}
@media ${device.laptop} {
  flex-direction: row;
  padding: 0;
}
`

const SavedVizs = ({ data }) => (
  <StyledSavedVizs>
    <SavedViz 
      headerContent="214 587"
      middleContent=""
      footerContent="euros saved"
      icon="euro-sign"
      viz="Viz1"
      color="mainDark"
    />
    <SavedViz 
      headerContent=""
      middleContent="89"
      footerContent="integrations avoided"
      icon="asterisk"
      viz="Viz2"
      color="mainDark"
    />
    <SavedViz 
      headerContent="110"
      middleContent=""
      footerContent="number of users"
      icon="users"
      viz="Viz3"
      color="mainDark"
    />
    <SavedViz 
      headerContent=""
      middleContent="0 1 2 4 0 0"
      footerContent="hours saved"
      icon="clock"
      viz="Viz4"
      color="mainDark"
    />
  </StyledSavedVizs>
)

export default SavedVizs