import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import LocalizedLink from './LocalizedLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import HexSvg from '../images/hex.svg';
import { device, colors } from '../Theme.js';

const StyledNews = styled.div`
    display: none;
    @media ${device.tablet} {
        display: block;
    }
    position: relative;
    background: url(${HexSvg});
    background-size: cover;
    margin-top: -57.5%;
    width: 66.6%;
    margin-left: 33.333%;
    padding-top: 77%;
    z-index: 0;
    svg {
        fill: blue;
    }
    @media (max-width: 768px) {
    }
`;
const StyledContent = styled.div`
    position: absolute;
    top: 25%;
    width: calc(50% - 2rem);
    left: calc(50% + 1rem);
    a:link {
        text-decoration: none;
    }
    a:hover {
        color: white;
    }
    a.go-to-link {
        text-decoration: 2px dotted;
    }
    h2 {
        @media ${device.tablet} {
            font-size: 1.6rem;
        }
    }
    span {
        @media ${device.tablet} {
            font-size: 40%;
        }
        @media ${device.laptop} {
            font-size: 60%;
        }
        @media ${device.laptopL} {
            font-size: 80%;
        }
    }
    .meta {
        margin-bottom: 0.2em;
        .type,
        .date {
            text-transform: capitalize;
            margin: 0 0.2em;
            font-weight: 500;
        }
    }
    .icon {
        margin-right: 0.4em;
        font-size: 0.8rem;
    }
    .title-excerpt {
        padding-bottom: 0.4em;
        border-bottom: 1px dotted white;
        font-weight: 300;
        font-size: 0.8rem;
        @media ${device.laptop} {
            font-size: 0.8rem;
        }
        @media ${device.laptopL} {
            font-size: 1.2rem;
        }
    }
`;
const FeaturedNews = ({ data }) => (
    <StaticQuery
        query={graphql`
            query {
                news: allMarkdownRemark(
                    limit: 3
                    filter: {
                        frontmatter: {
                            type: { eq: "news" }
                            status: { eq: "published" }
                        }
                    }
                    sort: { fields: [frontmatter___date], order: DESC }
                ) {
                    totalCount
                    edges {
                        node {
                            id
                            html
                            frontmatter {
                                title
                                path
                                date(formatString: "DD MMMM YYYY")
                                tags
                                status
                                type
                                subtype
                            }
                            excerpt(
                                format: PLAIN
                                pruneLength: 20
                                truncate: true
                            )
                        }
                    }
                }
            }
        `}
        render={data => (
            <StyledNews>
                <StyledContent>
                    <h2>Latest News</h2>

                    {data.news.edges.map(({ node }) => (
                        <LocalizedLink to={node.frontmatter.path} key={node.id}>
                            <div>
                                <p className="meta">
                                    <span className="icon icon-blog">
                                        <FontAwesomeIcon
                                            icon="hexagon"
                                            color={
                                                colors[node.frontmatter.subtype]
                                            }
                                        />
                                        {/* <FontAwesomeIcon icon={['fas', 'hexagon']} size="1x" /> */}
                                    </span>
                                    <span className="type">
                                        {node.frontmatter.subtype}
                                    </span>
                                    <span className="date">
                                        {node.frontmatter.date}
                                    </span>
                                </p>
                                <p className="title-excerpt">
                                    {node.frontmatter.title}
                                </p>
                            </div>
                        </LocalizedLink>
                    ))}

                    <LocalizedLink to="/news" className="go-to-link">
                        Go to news
                    </LocalizedLink>
                </StyledContent>
            </StyledNews>
        )}
    />
);

export default FeaturedNews;
