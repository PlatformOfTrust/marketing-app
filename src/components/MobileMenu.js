import React from 'react';
import styled from 'styled-components';

import ToolsNav from './ToolsNav';
import SiteNav from './SiteNav';
import AppsNav from './AppsNav';
import MenuFooter from './MenuFooter';
import { device } from '../Theme.js';

const StyledMobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 100vw;
    min-height: 100vh;
    nav {
        margin-top: 2rem;
    }
    @media ${device.tablet} {
        display: none;
    }
`;
const MobileMenu = () => (
    <StyledMobileMenu>
        <ToolsNav />
        <SiteNav />
        <AppsNav />
        <MenuFooter />
    </StyledMobileMenu>
);

export default MobileMenu;
