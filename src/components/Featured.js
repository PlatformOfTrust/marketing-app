import React from 'react';
import styled from 'styled-components';

import Hex from './Hex';
import HexImage from './HexImage';
import FeaturedEvent from './FeaturedEvent';
import FeaturedCase from './FeaturedCase';
import HexPic from '../images/new-bg-square-smaller.jpg';
import { colors } from '../Theme.js';

const StyledFeatured = styled.div`
    position: relative;
    x-index: 10;
    .featured-case {
        transform: translate(25%, 0);
        color: ${colors.main};
    }
    .featured-event {
        padding-top: 44%;
    }
`;
const StyledFeaturedHex = styled.div`
    position: relative;
    .hex {
        position: absolute;
        width: 50%;
        bottom: 0;
        z-index: 3;
    }
`;

const Featured = ({ data }) => (
    <StyledFeatured className="featured">
        <HexImage pic={HexPic} hexId="FeaturedHex" />

        <StyledFeaturedHex className="featured-case">
            <FeaturedCase />
            <div className="hex">
                <Hex color="light" />
            </div>
        </StyledFeaturedHex>

        <StyledFeaturedHex className="featured-event">
            <FeaturedEvent />
            {typeof window !== 'undefined' &&
                document.querySelectorAll('.hex-content')[1] !== undefined && (
                    <div className="hex">
                        <Hex color="mainDarker" />
                    </div>
            )}
        </StyledFeaturedHex>
    </StyledFeatured>
);

export default Featured;
