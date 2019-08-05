import React from 'react';
import LocalizedLink from './LocalizedLink';
import styled from 'styled-components';

import { injectIntl } from 'react-intl';
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

const FooterInfo = ({
    intl: {
        messages: { FooterInfo }
    }
}) => {
    return (
        <StyledFooterInfo>
            <h5 className="mb-md-1 footer-elements-opacity">
                {`${FooterInfo.companyName}`}
            </h5>
            <p className="footer-elements-opacity">{`${FooterInfo.VAT}`}</p>
            <p>
                <LocalizedLink
                    to="/privacy-policy"
                    className="footer-elements-opacity"
                >
                    {`${FooterInfo.privacyPolicy}`}
                </LocalizedLink>
            </p>
        </StyledFooterInfo>
    );
};

export default injectIntl(FooterInfo);
