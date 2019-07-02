import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CustomImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "placeholder-person.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fixedImage: file(relativePath: { eq: "placeholder-person.jpg" }) {
          childImageSharp {
            fixed(width: 500, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1440, maxHeight: 1440) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const defaultImg = (
        // <Img
        //   alt={props.alt}
        //   fixed={data.fixedImage.childImageSharp.fixed}
        // />
        <Img
          alt={props.alt}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )

      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });

      if (!image) { return defaultImg; }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img
          alt={props.alt}
          sizes={imageSizes}
        />
      );
    }}
  />
)
export default CustomImage