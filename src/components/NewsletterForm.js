import React from 'react'
import styled from 'styled-components'
import HubspotForm from 'react-hubspot-form'

// import { colors, device } from '../Theme.js'

const StyledForm = styled.article`
  * { color: white; }
}
`

const NewsletterForm = props => {
  return (
    <StyledForm>
      <HubspotForm
        portalId="4568282"
        formId="6ac54a8a-a93a-4e18-91ef-6698f8ba380f"
        loading={<div>Loading...</div>}
      />
    </StyledForm>
  )
}

export default NewsletterForm
