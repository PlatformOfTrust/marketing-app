import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';

import { injectIntl } from 'react-intl';

import { device, colors } from '../Theme.js';

const StyledFeaturedCase = styled.div`
    // position: relative;
    // transform: translate(25%, 0);
    color: ${colors.main};
    position: absolute;
    width: 45%;
    transform: translateY(-30vw);
    @media ${device.mobileL} {
        transform: translateY(-20vw);
    }
    @media ${device.laptop} {
        transform: translateY(-10vw);
    }
    @media ${device.laptopL} {
        transform: translateY(-150%);
    }
    padding-left: 0.4rem;
    z-index: 10;
    h3 {
        margin-bottom: 0;
        color: ${colors.main};
        font-size: calc(6px + 1.2vw);
        @media ${device.tablet} {
            font-size: calc(10px + 0.2vw);
        }
        @media ${device.laptopL} {
            font-size: 1.125rem;
        }
    }
    p {
        min-height: 2em;
        color: ${colors.main};
        margin-bottom: 0.5vw;
        font-weight: 700;
        font-size: calc(10px + 2.2vw);
        @media ${device.tablet} {
            font-size: calc(10px + 1.8vw);
        }
        @media ${device.laptop} {
            font-size: calc(10px + 0.6vw);
        }
        @media ${device.laptopL} {
            font-size: 1.2rem;
        }
    }
    .read-more {
        color: ${colors.main};
        font-size: calc(6px + 1.2vw);
        @media ${device.tablet} {
            font-size: calc(10px + 0.4vw);
        }
        @media ${device.laptopL} {
            font-size: 1.125rem;
        }
    }
`;

const FeaturedCase = ({ intl: { messages } }) => (
    <StaticQuery
        query={graphql`
            query featuredCaseQuery {
                allMdx(
                    filter: { frontmatter: { type: { eq: "case" } } }
                    sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 250)
                            id
                            frontmatter {
                                title
                                shorttitle
                                date(formatString: "MMMM DD, YYYY")
                                path
                                type
                                subtype
                                author
                                pic
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <StyledFeaturedCase className="hex-content">
                <div className="content-wrapper">
                    <Link to={data.allMdx.edges[1].node.frontmatter.path}>
                        <h3>{`${messages.case}`}</h3>
                        <p>
                            {data.allMdx.edges[1].node.frontmatter.shorttitle}
                        </p>
                        <span className="read-more">{`${messages.readMore}`}</span>
                    </Link>
                </div>
            </StyledFeaturedCase>
        )}
    />
);
export default injectIntl(FeaturedCase);
