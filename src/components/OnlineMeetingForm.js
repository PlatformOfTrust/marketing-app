import React from 'react';
import styled from 'styled-components';
import HubspotForm from 'react-hubspot-form';

import { colors } from '../Theme.js';

const StyledForm = styled.article`
  background: ${colors.mainDarker};
  max-width: 34rem;
  padding: 1rem;
  box-shadow: 0 0 0.8rem ${colors.mainDarkest};
  * { color: white; }
}
`;

const OnlineMeetingForm = props => {
    return (
        <StyledForm>
            <HubspotForm
                portalId="4568282"
                formId="0a02c8a6-0b77-4fec-babe-c87de5065d88"
                loading={<div>Loading...</div>}
            />
        </StyledForm>
    );
};

export default OnlineMeetingForm;
