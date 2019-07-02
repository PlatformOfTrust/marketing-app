import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import PricingCard from '../components/PricingCard'
import Layout from '../components/layout'
import CustomRoundedButton from '../components/CustomRoundedButton'

import { device } from '../Theme.js'

const StyledMain = styled.main`
width: auto;
max-width: 1440px;
min-height: 75vh;
margin: 0 auto;
padding: 2rem;
h1, p, button { color: white }
`

const StyledPricingTable = styled.section`
display: flex;
flex-direction: column;
width: 100%;
margin: 0;
@media ${device.laptop} {
  flex-direction: row;
  padding: 0;
}
`

export default function Pricing({ data }) {
  return (
    <Layout>
      <StyledMain>
        <h1>Pricing</h1>
        <p>Pick a plan that suites your business needs</p>
        <StyledPricingTable>
          {data.pricing.edges.map(({ node }) => (
            <PricingCard
              key={node.id}
              name={ node.frontmatter.title }
              content={ node.html } 
              icon={ node.frontmatter.icon }
              price={ node.frontmatter.price }
              // cta={ node.frontmatter.cta }
              color={ node.frontmatter.color }
            /> 
          ))}
        </StyledPricingTable>
        <p>Do you think you and your partners would benefít from our Platform of Trust? Become a reseller and collect the full benefits.</p>
        <CustomRoundedButton label="Become reseller" color="alert" />
      </StyledMain>
    </Layout>
  );
}
export const pageQuery = graphql`
  query {
    pricing: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "pricing" } } }
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            title
            path
            type
            order
            icon
            price
            cta
            color
          }
        }
      }
    }
  }
`;