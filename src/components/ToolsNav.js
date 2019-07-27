import React from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';

import { colors } from '../Theme.js';

const StyledToolsNav = styled.nav`
    color: ${colors.mainDark};
    text-align: right;
    a {
        display: none; // Change when tools released
        font-weight: 300;
        color: ${colors.mainDark};
    }
    a:visited {
        color: ${colors.mainDarker};
    }
`;

const ToolsNav = props => {
    return (
        <StyledToolsNav className="apps">
            <LocalizedLink className="nav-link" to="/search">
                Search
            </LocalizedLink>
            <LocalizedLink className="nav-link" to="/faq">
                FAQ
            </LocalizedLink>
            <LocalizedLink className="nav-link" to="/language">
                En/Fi
            </LocalizedLink>
            <LocalizedLink className="nav-link" to="/login">
                Login
            </LocalizedLink>
        </StyledToolsNav>
    );
};

export default ToolsNav;
