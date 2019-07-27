import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import LocalizedLink from './LocalizedLink';
import styled from 'styled-components';

import { device } from '../Theme.js';

const StyledFeaturedEvent = styled.div`
    // position: relative;
    // padding-top: 44%

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
        font-size: calc(6px + 1.2vw);
        @media ${device.tablet} {
            font-size: calc(10px + 0.4vw);
        }
        @media ${device.laptopL} {
            font-size: 1.125rem;
        }
    }
`;

const FeaturedEvent = ({ data }) => (
    <StaticQuery
        query={graphql`
            query featuredEventQuery {
                allMdx(
                    filter: { frontmatter: { type: { eq: "event" } } }
                    sort: { order: ASC, fields: [frontmatter___time] }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 250)
                            id
                            frontmatter {
                                title
                                shorttitle
                                time
                                path
                                eventlink
                                type
                                subtype
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const allEvents = data.allMdx.edges;
            const upcomingEvents = allEvents.filter(
                event =>
                    Date.now() - Date.parse(event.node.frontmatter.time) <= 0
            );
            const hasUpcomingEvents = upcomingEvents.length > 0;
            const ownUpcomingEvents = upcomingEvents.filter(
                event => event.node.frontmatter.potevent
            );
            const friendsUpcomingEvents = upcomingEvents.filter(
                event => !event.node.frontmatter.potevent
            );
            const hasOwnUpgomingEvents =
                hasUpcomingEvents && ownUpcomingEvents.length > 0
                    ? true
                    : false;

            return (
                <>
                    {hasUpcomingEvents && (
                        <StyledFeaturedEvent className="hex-content">
                            <div className="content-wrapper">
                                {hasOwnUpgomingEvents && (
                                    <LocalizedLink
                                        to={
                                            ownUpcomingEvents[0].node
                                                .frontmatter.path
                                        }
                                    >
                                        <h3>
                                            {
                                                ownUpcomingEvents[0].node
                                                    .frontmatter.type
                                            }
                                        </h3>
                                        <p>
                                            {
                                                ownUpcomingEvents[0].node
                                                    .frontmatter.shorttitle
                                            }
                                        </p>
                                        <span className="read-more">
                                            Read more
                                        </span>
                                    </LocalizedLink>
                                )}
                                {!hasOwnUpgomingEvents && (
                                    <LocalizedLink to="/events">
                                        <h3>
                                            {
                                                friendsUpcomingEvents[0].node
                                                    .frontmatter.type
                                            }
                                        </h3>
                                        <p>
                                            {
                                                friendsUpcomingEvents[0].node
                                                    .frontmatter.shorttitle
                                            }
                                        </p>
                                        <span className="read-more">
                                            Read more
                                        </span>
                                    </LocalizedLink>
                                )}
                            </div>
                        </StyledFeaturedEvent>
                    )}
                </>
            );
        }}
    />
);
export default FeaturedEvent;
