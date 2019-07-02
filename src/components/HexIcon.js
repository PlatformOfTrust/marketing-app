import React from 'react';
import styled from 'styled-components';

import { colors } from '../Theme.js';
import Hex from './Hex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledHexIcon = styled.div`
  // background: ${props => (props.bgColor ? colors[props.bgColor] : 'white')};
  padding-top: 115.4701%;
  // -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  // clip-path: url("#hex-clip");
`;
const HexContent = styled.div`
    position: absolute;
    width: 86%;
    top: 0;
    left: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 1;
    && * {
        color: ${props => (props.color ? colors[props.color] : 'black')};
    }
`;
const StyledHexBg = styled.div`
    position: absolute;
    width: 86%;
    bottom: 0;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 0;
`;

const HexIcon = props => {
    return (
        <StyledHexIcon className="content-wrapper" bgColor={props.bgColor}>
            <HexContent className="content" color={props.color}>
                <FontAwesomeIcon icon={['fal', `${props.icon}`]} size="4x" />
            </HexContent>
            <StyledHexBg>
                <Hex color={props.bgColor} />
            </StyledHexBg>
        </StyledHexIcon>
    );
};

export default HexIcon;
