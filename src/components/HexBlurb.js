import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Hex from './Hex'
import { device } from '../Theme.js'

const StyledHexBlurb = styled.div`
  // background: ${props => (props.bgColor ? props.bgColor : 'white')};
  padding-top: 115.4701%;
  // -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  // clip-path: url("#hex-clip");
`
const StyledHexBg = styled.div`
  position: absolute;
  width: 86%;
  bottom: 0;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 0;
`
const StyledHexContent = styled.div`
  position: absolute;
  width: 85%;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  padding: 1vw;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  && * {
    color: ${props => (props.textColor ? props.textColor : 'black')};
  }
  h5 {
    padding-top: 1.2vw;
    @media ${device.laptop} {
      font-size: calc(1rem + ((1vw - 9.92px) * 4.4355));
    }
    @media ${device.laptopM} {
      font-size: 1.6875rem;
    }
  }
  svg {
    font-size: 3rem;
    @media ${device.tablet} {
      font-size: 2.5rem;
    }
    @media ${device.laptop} {
      font-size: 2.75rem;
    }
  }
`

const HexBlurb = props => {
  return (
    <StyledHexBlurb className="content-wrapper" bgColor={props.bgColor}>
      <StyledHexContent className="content" textColor={props.textColor}>
        <FontAwesomeIcon icon={['fal', `${props.icon}`]} size="3x" />
        <h5>{props.title}</h5>
        <p>{props.content}</p>
      </StyledHexContent>
      <StyledHexBg>
        <Hex color={props.bgColor} />
      </StyledHexBg>
    </StyledHexBlurb>
  )
}

export default HexBlurb
