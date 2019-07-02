import React from 'react'
import styled from 'styled-components'
import HubspotForm from 'react-hubspot-form'

import { colors } from '../Theme.js'

const StyledForm = styled.article`
  background: ${colors.mainDarker};
  max-width: 34rem;
  padding: 1rem;
  box-shadow: 0 0 0.8rem ${colors.mainDarkest};
  * { color: white; }
}
`;

const Contactform = (props) => {
  return (
    <StyledForm> 
      
      <HubspotForm
        portalId='4568282' // '4568282'
        formId='0c04f084-c2f6-4fbd-8f58-1d55b988580b' // '6ac54a8a-a93a-4e18-91ef-6698f8ba380f'
        loading={<div>Loading...</div>}
      />

    </StyledForm> 
)}

export default Contactform