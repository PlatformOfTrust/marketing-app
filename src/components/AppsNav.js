import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors, device } from '../Theme.js';

const StyledAppsNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${colors.mainDark};
    a {
        font-weight: 900;
        color: ${colors.mainDark};
        padding: 0.5rem 1rem;
    }
    a:visited {
        color: ${colors.mainDarker};
    }

    @media ${device.tablet} {
        position: absolute;
        top: 0;
        left: 50%;
        display: inline-block;
        padding: 0.2em 3em 0.2em;
        text-align: right;
        background: #583eb9;
        clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%);
        a.apps-nav-link {
            position: relative;
            display: inline-block;
            color: ${colors.light};
            margin-right: 1em;
            padding: 0;
            font-weight: 400;
            &:after {
                content: '';
                position: absolute;
                width: 0%;
                height: 0px;
                left: 50%;
                bottom: 0px;
                border-radius: 10%;
                transition: all 0.3s ease-in;
            }
            &:hover,
            :focus {
                text-shadow: 0px 0px 2px rgba(240, 240, 240, 0.4);
                text-decoration: none;
                outline: none;
                &:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 0px;
                    left: 0;
                    bottom: 0px;
                    background: transparent;
                    border-bottom: 2px dotted #a897fe;
                    border-radius: 0%;
                }
            }
            &.active:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 0px;
                left: 0;
                bottom: 0px;
                background: transparent;
                border-bottom: 2px dotted #a897fe;
                border-radius: 0%;
            }
        }
    }
`;

const AppsNav = props => {
    return (
        <StyledAppsNav className="apps">
            <Link to="/" className="apps-nav-link active">
                Platform of Trust
            </Link>
            {/* <a href="https://world.oftrust.net/" className="apps-nav-link" >MyWorld</a> */}
            <a href="https://developer.oftrust.net/" className="apps-nav-link">
                Developer portal
            </a>
        </StyledAppsNav>
    );
};

export default AppsNav;
