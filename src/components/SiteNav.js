import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors, device } from '../Theme.js';

const StyledSiteNav = styled.nav`
    color: ${colors.mainDark};
    a {
        display: block;
        padding: 0.5rem 1rem;
        font-weight: 500;
        color: ${colors.mainDark};
    }
    a:visited {
        color: ${colors.mainDarker};
    }
    @media ${device.laptop} {
        font-size: 2rem;
    }
    @media ${device.tablet} {
        display: inline-block;
        vertical-align: middle;
        margin-left: 1em;
        font-size: 1.6rem;
        a.site-nav-link {
            color: ${colors.light};
            font-weight: 400;
            display: inline-block;
            margin-right: 0em;
            padding: 0.4em 0.3em;
            border-bottom: 0.3em dotted rgba(240, 240, 240, 0);
            border-radius: 50%;
            transition: all 0.3s;
            &.active {
                border-bottom: 0.3em dotted #f0f0f0;
                border-radius: 0%;
            }
            &:hover {
                text-decoration: none;
                text-shadow: 0px 0px 3px rgba(240, 240, 240, 0.8);
                border-bottom: 0.2em dotted rgba(240, 240, 240, 0.2);
                border-radius: 0%;
            }
        }
        a:visited.site-nav-link {
            color: ${colors.lightUsed};
        }
    }
`;
const activeStyles = {
    // background: colors.mainLightest,
    borderBottom: '0.2em dotted rgb(240, 240, 240)',
    borderRadius: '0%'
};

const SiteNav = props => {
    return (
        <StyledSiteNav className="apps">
            {/* <Link className="site-nav-link" to="/pricing" activeStyle={activeStyles}>Pricing</Link> */}
            <Link
                className="site-nav-link"
                to="/cases"
                activeStyle={activeStyles}
            >
                Cases
            </Link>
            <Link
                className="site-nav-link"
                to="/news"
                activeStyle={activeStyles}
            >
                News
            </Link>
            <Link
                className="site-nav-link"
                to="/events"
                activeStyle={activeStyles}
            >
                Events
            </Link>
            <Link
                className="site-nav-link"
                to="/about"
                activeStyle={activeStyles}
            >
                About
            </Link>
            <Link
                className="site-nav-link"
                to="/contact"
                activeStyle={activeStyles}
            >
                Contact
            </Link>
        </StyledSiteNav>
    );
};

export default SiteNav;
