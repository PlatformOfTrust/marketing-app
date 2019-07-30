import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { device, colors } from '../Theme.js';

const StyledToolsNav = styled.nav`
    position: absolute;

    display: flex;
    flex-wrap: wrap;
    top: 2px;
    right: 10px;
    text-align: right;
    @media only screen and (max-width: 1367px) {
        flex-direction: column;
    }
    @media ${device.tablet} {
        a {
            display: block; // Change when tools released
            font-weight: 300;
            color: ${colors.dark};
        }
    }
    a {
        display: block; // Change when tools released
        font-weight: 300;
        color: ${colors.light};
    }
`;

const ToolsNav = props => {
    return (
        <StyledToolsNav className="apps">
            <Link className="nav-link" to="/faq">
                FAQ
            </Link>
            <Link className="nav-link" to="/language">
                En/Fi
            </Link>
        </StyledToolsNav>
    );
};

export default ToolsNav;
