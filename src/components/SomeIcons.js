import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { colors } from '../Theme.js'

const StyledSomeIcons = styled.nav`
  display: inline-flex;
  flex-direction: ${ props => props.vertical ? "column" : "row" }; 
  align-items: center;
  a {
    display: inline-block;
    width: 100%;
    max-width: 24px;
    padding: 0;
    margin: 0 2.5% 0 0;
    line-height: 1;
  } 
  svg {
    max-width: 24px;
    // max-width: 100%;
    height: auto;
    line-height: 0;
    vertical-align: 0;
    color: ${ props => props.color ? colors[props.color] : colors.main }
  }
`

const SomeIcons = (props) => {
  return (
    <StyledSomeIcons className="some-links" color={props.color} vertical={props.vertical}>

      <a href="https://www.facebook.com/platformoftrust" className="some-link facebook" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={['fab', `facebook-square`]} size="8x" />
      </a>
    
      <a href="https://twitter.com/PlatformOfTrust" className="some-link twitter" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={['fab', `twitter-square`]} size="8x" />
      </a>
    
      <a href="https://github.com/PlatformOfTrust/" className="some-link github" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={['fab', `github-square`]} size="8x" />
      </a>
    
      <a href="https://www.linkedin.com/company/platform-of-trust/" className="some-link linkedin" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={['fab', `linkedin`]} size="8x" />
      </a>
    
      <a href="https://www.youtube.com/channel/UCSHXKYHxBCl_hXdBZU_A-gg" className="some-link youtube" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={['fab', `youtube-square`]} size="8x" />
      </a>
    </StyledSomeIcons>
)}

export default SomeIcons