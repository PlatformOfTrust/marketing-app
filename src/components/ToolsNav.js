import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors } from '../Theme.js';

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
    a {
        display: block; // Change when tools released
        font-weight: 300;
        color: ${colors.mainDarkest};
    }
`;

const ToolsNav = props => {
    return (
        <StyledToolsNav className="apps">
            <Link className="nav-link" to="/search">
                Search
            </Link>
            <Link className="nav-link" to="/faq">
                FAQ
            </Link>
            <Link className="nav-link" to="/language">
                En/Fi
            </Link>
            <Link className="nav-link" to="/login">
                Login
            </Link>
        </StyledToolsNav>
    );
};

export default ToolsNav;
