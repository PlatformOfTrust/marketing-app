import React from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';

import './stylesForComponents/AppsNav.scss';

const AppsNav = props => {
    return (
        <div className="apps">
            <LocalizedLink to="/" className="apps-nav-link active">
                Platform of Trust
            </LocalizedLink>
            {/* <a href="https://world.oftrust.net/" className="apps-nav-link" >MyWorld</a> */}
            <a href="https://developer.oftrust.net/" className="apps-nav-link">
                Developer portal
            </a>
        </div>
    );
};

export default AppsNav;
