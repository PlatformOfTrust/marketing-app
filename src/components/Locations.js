import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Location from './Location';

const StyledLocations = styled.section``;

const Locations = ({ data }) => (
    <StaticQuery
        query={graphql`
            query {
                pricing: allMarkdownRemark(
                    filter: { frontmatter: { subtype: { eq: "location" } } }
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
                                subtitle
                                pic
                                phone
                                streetAddress
                                postalCode
                                addressRegion
                                addressCountry
                                map
                                googlelink
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <StyledLocations className="locations row">
                {data.pricing.edges.map(({ node, index }) => (
                    <Location
                        key={node.id}
                        name={node.frontmatter.name}
                        subtitle={node.frontmatter.subtitle}
                        pic={node.frontmatter.pic}
                        phone={node.frontmatter.phone}
                        streetAddress={node.frontmatter.streetAddress}
                        postalCode={node.frontmatter.postalCode}
                        addressRegion={node.frontmatter.addressRegion}
                        addressCountry={node.frontmatter.addressCountry}
                        map={node.frontmatter.map}
                        googlelink={node.frontmatter.googlelink}
                    />
                ))}
            </StyledLocations>
        )}
    />
);

export default Locations;
