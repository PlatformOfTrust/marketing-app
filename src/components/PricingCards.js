import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import PricingCard from './PricingCard'

import { device } from '../Theme.js'

const StyledPricingCards = styled.section`
display: flex;
flex-direction: column;
width: 100%;
margin: 0;
@media ${device.laptop} {
  flex-direction: row;
  padding: 0;
}
`

const PricingCards = ({ data }) => (
  <StaticQuery
    query={graphql`
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
    `
    }
    render={data => (
      <StyledPricingCards>
        {data.pricing.edges.map(({ node }) => (
          <PricingCard
            key={node.id}
            name={ node.frontmatter.title }
            content={ node.html } 
            icon={ node.frontmatter.icon }
            price={ node.frontmatter.price }
            cta={ node.frontmatter.cta }
            color={ node.frontmatter.color }
          /> 
        ))}
      </StyledPricingCards>
    )}
  />
)

export default PricingCards