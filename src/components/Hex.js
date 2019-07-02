import React from 'react'
import styled from 'styled-components'

import { colors } from '../Theme.js'


const StyledHex = styled.div`
  height: 100%;
  width: auto;
  svg: { height: 50%; }
  // background: ${ props => props.color ? colors[props.color] : "transparent" };
`;

const Hex = (props) => {

  return (
    <StyledHex > 
      
      <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"  viewBox="0 0 86 100">
        {/* <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse"  patternContentUnits="objectBoundingBox"  width="100%" height="100%">
            <image xlinkHref={props.pic} x="0" y="0" width="1" height="1" />
          </pattern>
        </defs> */}
        <polygon fill={colors[props.color]} points="43,0 86,25 86,75 43,100 0,75 0,25" />
      </svg>

    </StyledHex>
)}

export default Hex