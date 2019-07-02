import React from "react";
import Helmet from "react-helmet";
import Img from 'gatsby-image';
import { graphql } from "gatsby";

import Layout from '../components/layout'

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <Layout>
        <article className="pricing-container">
            <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
            <div className="pricing">
                <h1>{post.frontmatter.title}</h1>
                {post.frontmatter.image && <Img fluid={post.frontmatter.image.childImageSharp.fluid} />}
                <div
                className="pricing-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </article>
    </Layout>
  );
}

export const pageQuery = graphql`
    query pricingByPath($path: String!) {
        markdownRemark(frontmatter: { 
          path: { eq: $path } 
        }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                image {
                    childImageSharp {
                        resize(width: 1500, height: 1500) {
                            src
                        }
                        fluid(maxWidth: 786) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
;