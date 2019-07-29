import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { colors } from '../Theme.js';

const StyledFooterInfo = styled.div`
    color: ${colors.light};
    h5 {
        font-weight: 600;
        color: ${colors.main};
    }
    a {
        font-weight: 900;
        color: ${colors.light};
        text-decoration: underline dotted;
    }
    a:visited {
        color: ${colors.lightUsed};
    }
`;

const FooterInfo = props => {
    return (
        <StyledFooterInfo>
            <h5 className="mb-md-1 footer-elements-opacity">Platform of Trust Oy</h5>
            <p className="footer-elements-opacity"> VAT-number FI29800052</p>
            <p>
                <Link to="/privacy-policy" className="footer-elements-opacity">Privacy Policy</Link>
            </p>
        </StyledFooterInfo>
    );
};

export default FooterInfo;
