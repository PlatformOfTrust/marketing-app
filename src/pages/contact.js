import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

import ContactBlurbs from '../components/ContactBlurbs'
import Locations from '../components/Locations'
import ContactForm from '../components/ContactForm'

import { colors, device, variables } from '../Theme.js'

const StyledPage = styled.div`
  width: auto;
  max-width: ${variables.pageWidthNarrow};
  margin: 0 auto;
  min-height: 75vh;
  margin: 0 auto;
  @media ${device.laptop} {
  }
  * {
    color: white;
  }
`
const StyledGraph = styled.div`
  width: auto;
  max-width: ${variables.pageWidth};
  min-height: 30vh;
  margin: 0 auto;
  // background-color: white;
  h2 {
    color: ${colors.main};
  }
`
const StyledSection = styled.section`
  &&& {
    max-width: ${variables.pageWidth};
  }
  margin: 5rem auto;
`
const StyledBilling = styled.article`
  border: 2px solid;
  padding: 1rem;
  p {
    font-size: 1.7rem;
    line-height: 1.125;
  }
`
const StyledPad = styled.div`
  // margin: 1rem;
`

const Contact = () => (
  <Layout>
    <SEO title="Platform of Trust Contact information" />
    <StyledPage className="container">
      <StyledPad>
        <StyledSection className="contacts container">
          <h1>Contact</h1>
          <h2>
            Interested in turning your data in revenue? Let us tell you how.
          </h2>
          <StyledGraph>
            <ContactForm />
          </StyledGraph>
        </StyledSection>
        <StyledSection className="contacts container">
          <h2>Meet the team</h2>
          <ContactBlurbs />
        </StyledSection>
        <StyledSection className="locations container">
          <h2>Office locations</h2>
          <Locations />
        </StyledSection>
        <StyledSection className="billing container">
          <h2>Billing information</h2>
          <StyledBilling>
            <p>Suomen Tilaajavastuu Oy </p>
            <p>Operator: OpusCapita Group Oy</p>
            <p>OVT: 003723273271</p>
          </StyledBilling>
        </StyledSection>
      </StyledPad>
    </StyledPage>
  </Layout>
)

export default Contact
