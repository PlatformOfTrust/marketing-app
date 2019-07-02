import React from 'react'
import styled from 'styled-components'

import { colors } from '../Theme.js'
import CustomImage from './CustomImage'

const StyledLocation = styled.article`
  margin-bottom: 1rem;
  .content {
    display: flex;
    flex-direction: column;
    padding 1rem;
    background: ${colors.mainDarker};
    border-radius: 1rem;
    box-shadow: 0 0.6rem 1rem ${colors.mainDark};
    opacity: 0.9;
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      margin: 1em 0 0 0;
    }
    p {
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 0.2rem;
    }
  }
`

const Location = (props) => {
  return (
    <StyledLocation className="location col-12 col-md-6 col-lg-4">
      <div className="content">
        <a href={`${props.googlelink}`} target="_blank" rel="noopener noreferrer">
          <CustomImage filename={props.map} alt={props.name} />
        </a>
        <h3>{props.name}</h3>
        <p>{props.streetAddress}</p>
        <p>{props.postalCode} {props.addressRegion}</p>
        <p>{props.addressCountry}</p>
      </div>
    </StyledLocation>  
)}


export default Location