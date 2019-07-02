import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ContactBlurb from './ContactBlurb'

const StyledContactBlurbs = styled.section``

const ContactBlurbs = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        foo: allMarkdownRemark(
          filter: { frontmatter: { subtype: { eq: "contact" } } }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              html
              id
              frontmatter {
                subtype
                order
                name
                pic
                title
                phone
                email
                twitter
                linkedin
                image {
                  childImageSharp {
                    fluid(maxWidth: 1440) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledContactBlurbs className="contact-blurbs row">
        {data.foo.edges.map(({ node }) => (
          <ContactBlurb
            key={node.id}
            name={node.frontmatter.name}
            pic={node.frontmatter.pic}
            title={node.frontmatter.title}
            phone={node.frontmatter.phone}
            email={node.frontmatter.email}
            twitter={node.frontmatter.twitter}
            linkedin={node.frontmatter.linkedin}
          />
        ))}
      </StyledContactBlurbs>
    )}
  />
)

export default ContactBlurbs
