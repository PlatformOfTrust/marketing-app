import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MetaTags from 'react-meta-tags';
import styled from 'styled-components';
import HexImage from '../components/HexImage';
import CustomSquareButton from '../components/CustomSquareButton';
import CustomRoundedButton from '../components/CustomRoundedButton';
import SomeIcons from '../components/SomeIcons';
import Layout from '../components/layout';
import { colors, device, variables } from '../Theme.js';
import SocialPreviewImage from '../images/preview_social_share/events.jpg';

export const subtypeColors = {
    blog: `${colors.ok}`,
    news: `${colors.notice}`,
    article: `${colors.alert}`,
    business: `${colors.success}`,
    technical: `${colors.mainLightest}`
};
const StyledSection = styled.article`
  &&& { max-width: ${variables.pageWidthNarrow} }
  margin: 5rem auto;
  // background: ${colors.mainDarker}
`;
const StyledHeader = styled.div`
    h2 {
        margin-top: 4rem;
    }
`;
const StyledBlogs = styled.div`
    padding: 5%;
`;
const StyledTools = styled.nav`
  // background: ${colors.mainDarkest};
  padding: 0.4rem;
`;
const StyledSelector = styled.button`
    background: none;
    border: none;
    outline: none;
    color: white;
    &.selected-filter {
        span {
            border-bottom: 1px dotted white;
        }
    }
    &:focus {
        outline: none;
    }
    svg {
        margin-right: 0.2em;
    }
`;
const StyledDefault = styled.article`
    display: inline-block;
    padding: 1.5rem 0 0 0;
    margin: 1rem 0;
    border-top: 2px dotted ${colors.light};
    h2 {
        font-size: 1.4rem;
    }
    nav {
        width: 40%;
        margin-left: 1rem;
        vertical-align: middle;
    }
`;
const StyledBlogBlock = styled.article`
  display: inline-block;
  width: 100%;
  // @media ${device.laptop} { width: calc(50% - 2rem); }
  padding: 0.5rem;
  padding-bottom: 0;
  margin: 1rem 0 0;
  border-top: 2px dotted ${colors.light};
  &:last-child { border-bottom: 2px dotted ${colors.light}; }
  h2 { font-size: 1.4rem; }

  // &:nth-of-type(1) {
  //   width: 100%;
  //   border-top: none;
  //   h2 { font-size: 2.4rem; }
  // }

  // &:nth-child(n+5) {
  //   width: 100%;
  //   .featured-image, .excerpt { display: none }
  //   .title { order: 2; }
  //   .meta { order: 1; }
  //   .post-preview-content { width: 100%; }
  //   h2 { font-size: 2.4rem; }
  // }

  .post-link {
    text-decoration: none;
  }
  .meta {
    svg { margin-right: 0.4em; }
    span {
      margin-right: 0.3em;
      text-transform: capitalize;
    }
    .divider {
      display: inline-block;
      transform: translateY(-0.2em);
     }
  }
  .featured-image {
    display: inline-block;
    width: 30%;
  }
  .post-preview-content {
    display: inline-flex;
    flex-direction: column;
    width: 70%;
    padding: 1rem 10% 1rem 0;
    vertical-align: top;
    h2 {
      font-weight: 400;
    }
  }
`;
const StyledHexImage = styled.div`
    width: 85%;
    transform: translateX(-1rem) rotate(10deg) scale(0.9);
    // clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
`;
const StyledPad = styled.div`
    margin: 1rem;
`;

export default class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [
                'blog',
                'article',
                'pressRelease',
                'business',
                'technical'
            ],
            selected: 'all',
            showFooter: true
        };
    }

    handleFiltering = filter => {
        filter === 'all'
            ? this.setState({
                filters: [
                    'blog',
                    'article',
                    'pressRelease',
                    'business',
                    'technical'
                ]
            })
            : this.setState({ filters: [filter] });
        this.setState({ selected: [filter] });
    };

    render() {
        const { selected, filters } = this.state;
        // const data = this.props.data.allMdx
        const { edges: posts } = this.props.data.allMdx;
        const ownEvents = posts.filter(post => post.node.frontmatter.potevent);
        const friendsEvents = posts.filter(
            post => !post.node.frontmatter.potevent
        );
        const ownEventsNow = ownEvents.filter(
            post => Date.now() - Date.parse(post.node.frontmatter.time) <= 0
        );
        const friendsEventsNow = friendsEvents.filter(
            post => Date.now() - Date.parse(post.node.frontmatter.time) <= 0
        );
        const pastEvents = posts.filter(
            post => Date.now() - Date.parse(post.node.frontmatter.time) >= 0
        );
        const socialPreviewImageFullUri = window.location.origin + SocialPreviewImage;

        return (
            <Layout className="blog-posts">
                <MetaTags>
                    <meta property="og:title" content={SocialPreviewData.title} />
                    <meta property="og:description" content={SocialPreviewData.description} />
                    <meta property="og:image" content={socialPreviewImageFullUri} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={SocialPreviewData.title} />
                    <meta name="twitter:description" content={SocialPreviewData.description} />
                    <meta name="twitter:image" content={socialPreviewImageFullUri} />
                </MetaTags>
                <StyledPad>
                    <StyledSection className="posts-listing">
                        <StyledTools className="filters">
                            <StyledSelector
                                className={`tool-block all ${
                                    selected[0] === 'all'
                                        ? 'selected-filter'
                                        : ''
                                }`}
                            >
                                <span
                                    onClick={() => this.handleFiltering('all')}
                                >
                                    All
                                </span>
                            </StyledSelector>
                            <StyledSelector
                                className={`tool-block business ${
                                    selected[0] === 'business'
                                        ? 'selected-filter'
                                        : ''
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={['fa', 'hexagon']}
                                    color={colors.success}
                                />
                                <span
                                    onClick={() =>
                                        this.handleFiltering('business')
                                    }
                                >
                                    Business
                                </span>
                            </StyledSelector>
                            <StyledSelector
                                className={`tool-block article ${
                                    selected[0] === 'technical'
                                        ? 'selected-filter'
                                        : ''
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={['fa', 'hexagon']}
                                    color={colors.mainLightest}
                                />
                                <span
                                    onClick={() =>
                                        this.handleFiltering('technical')
                                    }
                                >
                                    Technical
                                </span>
                            </StyledSelector>
                        </StyledTools>
                        <StyledHeader className="container">
                            <div className="row">
                                <div className="col">
                                    <h1>Events</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 d-none d-md-block">
                                    <StyledHexImage>
                                        {/* <CustomImage filename="bg-square2.jpg" alt="Graphical element" /> */}
                                        <HexImage
                                            pic={require('./../images/new-bg-square-bigger5.jpg')}
                                            hexId={'EventHex-Hero'}
                                            rotate={true}
                                        />
                                    </StyledHexImage>
                                </div>
                                <div className="col-12 col-md-8">
                                    <h2>Come meet us at following events</h2>
                                </div>
                            </div>
                        </StyledHeader>
                        <StyledBlogs className="posts">
                            <div className="row">
                                <div className="potevents col-md-6">
                                    <h3>Events organised by us</h3>

                                    {ownEventsNow.length === 0 && (
                                        <StyledDefault>
                                            <h2>
                                                No upcoming events for now. Sign
                                                up for news to receive events
                                                info and follow us
                                            </h2>
                                            <Link to="/newsletter">
                                                <CustomRoundedButton label="Sign up for news" />
                                            </Link>
                                            <SomeIcons color="light" />
                                        </StyledDefault>
                                    )}

                                    {ownEventsNow
                                        .filter(post =>
                                            filters.includes(
                                                post.node.frontmatter.subtype
                                            )
                                        )
                                        .map(({ node: post }) => {
                                            return (
                                                <StyledBlogBlock
                                                    className="post-preview"
                                                    key={post.id}
                                                >
                                                    <div className="featured-image">
                                                        {post.frontmatter
                                                            .potevent && (
                                                            <Link
                                                                to={
                                                                    post
                                                                        .frontmatter
                                                                        .path
                                                                }
                                                                className="post-link"
                                                            >
                                                                <StyledHexImage>
                                                                    {/* <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} /> */}
                                                                    <HexImage
                                                                        pic={require(`.${
                                                                            post
                                                                                .frontmatter
                                                                                .path
                                                                        }/${
                                                                            post
                                                                                .frontmatter
                                                                                .pic
                                                                        }`)}
                                                                        hexId={`EventHex-${
                                                                            post.id
                                                                        }`}
                                                                        rotate={
                                                                            true
                                                                        }
                                                                    />
                                                                </StyledHexImage>
                                                            </Link>
                                                        )}
                                                        {!post.frontmatter
                                                            .potevent && (
                                                            <StyledHexImage>
                                                                <a
                                                                    href={
                                                                        post
                                                                            .frontmatter
                                                                            .eventlink
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {/* <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} /> */}
                                                                    <HexImage
                                                                        pic={require(`.${
                                                                            post
                                                                                .frontmatter
                                                                                .path
                                                                        }/${
                                                                            post
                                                                                .frontmatter
                                                                                .pic
                                                                        }`)}
                                                                        hexId={`EventHex-${
                                                                            post.id
                                                                        }`}
                                                                        rotate={
                                                                            true
                                                                        }
                                                                    />
                                                                </a>
                                                            </StyledHexImage>
                                                        )}
                                                    </div>
                                                    <div className="post-preview-content">
                                                        <div className="title">
                                                            {post.frontmatter
                                                                .potevent && (
                                                                <Link
                                                                    to={
                                                                        post
                                                                            .frontmatter
                                                                            .path
                                                                    }
                                                                    className="post-link"
                                                                >
                                                                    <h2>
                                                                        {
                                                                            post
                                                                                .frontmatter
                                                                                .title
                                                                        }
                                                                    </h2>
                                                                </Link>
                                                            )}
                                                            {!post.frontmatter
                                                                .potevent && (
                                                                <a
                                                                    href={
                                                                        post
                                                                            .frontmatter
                                                                            .eventlink
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <h2>
                                                                        {
                                                                            post
                                                                                .frontmatter
                                                                                .title
                                                                        }
                                                                    </h2>
                                                                </a>
                                                            )}
                                                        </div>
                                                        <div className="meta">
                                                            <p>
                                                                <FontAwesomeIcon
                                                                    icon={[
                                                                        'fa',
                                                                        'hexagon'
                                                                    ]}
                                                                    color={
                                                                        subtypeColors[
                                                                            post
                                                                                .frontmatter
                                                                                .subtype
                                                                        ]
                                                                    }
                                                                />
                                                                {post
                                                                    .frontmatter
                                                                    .subtype && (
                                                                    <>
                                                                        <span>
                                                                            {
                                                                                post
                                                                                    .frontmatter
                                                                                    .subtype
                                                                            }
                                                                        </span>
                                                                        <span className="divider">
                                                                            .
                                                                        </span>
                                                                    </>
                                                                )}
                                                                {post
                                                                    .frontmatter
                                                                    .time && (
                                                                    <>
                                                                        <span>
                                                                            {
                                                                                post
                                                                                    .frontmatter
                                                                                    .time
                                                                            }
                                                                        </span>
                                                                        <span className="divider">
                                                                            .
                                                                        </span>
                                                                    </>
                                                                )}
                                                                {post
                                                                    .frontmatter
                                                                    .place && (
                                                                    <span>
                                                                        {
                                                                            post
                                                                                .frontmatter
                                                                                .place
                                                                        }
                                                                    </span>
                                                                )}
                                                            </p>
                                                        </div>
                                                        <div className="event-link">
                                                            {post.frontmatter
                                                                .potevent && (
                                                                <Link
                                                                    to={
                                                                        post
                                                                            .frontmatter
                                                                            .path
                                                                    }
                                                                >
                                                                    <CustomSquareButton label="Read more" />
                                                                </Link>
                                                            )}
                                                            {!post.frontmatter
                                                                .potevent && (
                                                                <>
                                                                    <MDXRenderer>
                                                                        {
                                                                            post
                                                                                .code
                                                                                .body
                                                                        }
                                                                    </MDXRenderer>
                                                                    <a
                                                                        href={
                                                                            post
                                                                                .frontmatter
                                                                                .eventlink
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <CustomSquareButton label="Visit event page" />
                                                                    </a>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </StyledBlogBlock>
                                            );
                                        })}
                                </div>
                                <div className="nonpotevents col-md-6">
                                    <h3>Events organised by friends</h3>
                                    {friendsEventsNow
                                        .filter(post =>
                                            filters.includes(
                                                post.node.frontmatter.subtype
                                            )
                                        )
                                        .map(({ node: post }) => {
                                            return (
                                                <StyledBlogBlock
                                                    className="post-preview"
                                                    key={post.id}
                                                >
                                                    <div className="featured-image">
                                                        {post.frontmatter
                                                            .potevent && (
                                                            <Link
                                                                to={
                                                                    post
                                                                        .frontmatter
                                                                        .path
                                                                }
                                                                className="post-link"
                                                            >
                                                                <StyledHexImage>
                                                                    {/* <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} /> */}
                                                                    <HexImage
                                                                        pic={require(`.${
                                                                            post
                                                                                .frontmatter
                                                                                .path
                                                                        }/${
                                                                            post
                                                                                .frontmatter
                                                                                .pic
                                                                        }`)}
                                                                        hexId={`EventHex-${
                                                                            post.id
                                                                        }`}
                                                                        rotate={
                                                                            true
                                                                        }
                                                                    />
                                                                </StyledHexImage>
                                                            </Link>
                                                        )}
                                                        {!post.frontmatter
                                                            .potevent && (
                                                            <StyledHexImage>
                                                                <a
                                                                    href={
                                                                        post
                                                                            .frontmatter
                                                                            .eventlink
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {/* <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} /> */}
                                                                    <HexImage
                                                                        pic={require(`.${
                                                                            post
                                                                                .frontmatter
                                                                                .path
                                                                        }/${
                                                                            post
                                                                                .frontmatter
                                                                                .pic
                                                                        }`)}
                                                                        hexId={`EventHex-${
                                                                            post.id
                                                                        }`}
                                                                        rotate={
                                                                            true
                                                                        }
                                                                    />
                                                                </a>
                                                            </StyledHexImage>
                                                        )}
                                                    </div>
                                                    <div className="post-preview-content">
                                                        <div className="title">
                                                            {post.frontmatter
                                                                .potevent && (
                                                                <Link
                                                                    to={
                                                                        post
                                                                            .frontmatter
                                                                            .path
                                                                    }
                                                                    className="post-link"
                                                                >
                                                                    <h2>
                                                                        {
                                                                            post
                                                                                .frontmatter
                                                                                .title
                                                                        }
                                                                    </h2>
                                                                </Link>
                                                            )}
                                                            {!post.frontmatter
                                                                .potevent && (
                                                                <a
                                                                    href={
                                                                        post
                                                                            .frontmatter
                                                                            .eventlink
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <h2>
                                                                        {
                                                                            post
                                                                                .frontmatter
                                                                                .title
                                                                        }
                                                                    </h2>
                                                                </a>
                                                            )}
                                                        </div>
                                                        <div className="meta">
                                                            <p>
                                                                <FontAwesomeIcon
                                                                    icon={[
                                                                        'fa',
                                                                        'hexagon'
                                                                    ]}
                                                                    color={
                                                                        subtypeColors[
                                                                            post
                                                                                .frontmatter
                                                                                .subtype
                                                                        ]
                                                                    }
                                                                />
                                                                {post
                                                                    .frontmatter
                                                                    .subtype && (
                                                                    <>
                                                                        <span>
                                                                            {
                                                                                post
                                                                                    .frontmatter
                                                                                    .subtype
                                                                            }
                                                                        </span>
                                                                        <span className="divider">
                                                                            .
                                                                        </span>
                                                                    </>
                                                                )}
                                                                {post
                                                                    .frontmatter
                                                                    .time && (
                                                                    <>
                                                                        <span>
                                                                            {
                                                                                post
                                                                                    .frontmatter
                                                                                    .time
                                                                            }
                                                                        </span>
                                                                        <span className="divider">
                                                                            .
                                                                        </span>
                                                                    </>
                                                                )}
                                                                {post
                                                                    .frontmatter
                                                                    .place && (
                                                                    <span>
                                                                        {
                                                                            post
                                                                                .frontmatter
                                                                                .place
                                                                        }
                                                                    </span>
                                                                )}
                                                            </p>
                                                        </div>
                                                        <div className="event-link">
                                                            {post.frontmatter
                                                                .potevent && (
                                                                <Link
                                                                    to={
                                                                        post
                                                                            .frontmatter
                                                                            .path
                                                                    }
                                                                >
                                                                    <CustomSquareButton label="Read more" />
                                                                </Link>
                                                            )}
                                                            {!post.frontmatter
                                                                .potevent && (
                                                                <>
                                                                    <MDXRenderer>
                                                                        {
                                                                            post
                                                                                .code
                                                                                .body
                                                                        }
                                                                    </MDXRenderer>
                                                                    <a
                                                                        href={
                                                                            post
                                                                                .frontmatter
                                                                                .eventlink
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <CustomSquareButton label="Visit event page" />
                                                                    </a>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </StyledBlogBlock>
                                            );
                                        })}
                                </div>
                            </div>
                            {pastEvents.length > 0 && (
                                <div className="row">
                                    <div className="pastevents col-md-12">
                                        <h3>Past events</h3>
                                        {pastEvents
                                            .filter(post =>
                                                filters.includes(
                                                    post.node.frontmatter
                                                        .subtype
                                                )
                                            )
                                            .map(({ node: post }) => {
                                                return (
                                                    <StyledBlogBlock
                                                        className="post-preview"
                                                        key={post.id}
                                                    >
                                                        <div className="post-preview-content">
                                                            <div className="meta">
                                                                <p>
                                                                    <FontAwesomeIcon
                                                                        icon={[
                                                                            'fa',
                                                                            'hexagon'
                                                                        ]}
                                                                        color={
                                                                            subtypeColors[
                                                                                post
                                                                                    .frontmatter
                                                                                    .subtype
                                                                            ]
                                                                        }
                                                                    />
                                                                    {post
                                                                        .frontmatter
                                                                        .subtype && (
                                                                        <>
                                                                            <span>
                                                                                {
                                                                                    post
                                                                                        .frontmatter
                                                                                        .subtype
                                                                                }
                                                                            </span>
                                                                            <span className="divider">
                                                                                .
                                                                            </span>
                                                                        </>
                                                                    )}
                                                                    {post
                                                                        .frontmatter
                                                                        .time && (
                                                                        <>
                                                                            <span>
                                                                                {
                                                                                    post
                                                                                        .frontmatter
                                                                                        .time
                                                                                }
                                                                            </span>
                                                                            <span className="divider">
                                                                                .
                                                                            </span>
                                                                        </>
                                                                    )}
                                                                    {post
                                                                        .frontmatter
                                                                        .place && (
                                                                        <span>
                                                                            {
                                                                                post
                                                                                    .frontmatter
                                                                                    .place
                                                                            }
                                                                        </span>
                                                                    )}
                                                                </p>
                                                            </div>
                                                            <div className="title">
                                                                {post
                                                                    .frontmatter
                                                                    .potevent && (
                                                                    <Link
                                                                        to={
                                                                            post
                                                                                .frontmatter
                                                                                .path
                                                                        }
                                                                        className="post-link"
                                                                    >
                                                                        <h2>
                                                                            {
                                                                                post
                                                                                    .frontmatter
                                                                                    .title
                                                                            }
                                                                        </h2>
                                                                    </Link>
                                                                )}
                                                                {!post
                                                                    .frontmatter
                                                                    .potevent && (
                                                                    <a
                                                                        href={
                                                                            post
                                                                                .frontmatter
                                                                                .eventlink
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <h2>
                                                                            {
                                                                                post
                                                                                    .frontmatter
                                                                                    .title
                                                                            }
                                                                        </h2>
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </StyledBlogBlock>
                                                );
                                            })}
                                    </div>
                                </div>
                            )}
                        </StyledBlogs>
                    </StyledSection>
                </StyledPad>
            </Layout>
        );
    }
}

const SocialPreviewData = {
    title: 'Platform Of Trust | Events',
    description: 'Events organized by Platform of Trust and events that Platform of Trust is attending or a team member is speaking at.'
};

export const pageQuery = graphql`
    query eventsQuery {
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
                        date(formatString: "MMMM DD, YYYY")
                        path
                        potevent
                        type
                        subtype
                        time
                        place
                        eventlink
                        pic
                    }
                    code {
                        body
                    }
                }
            }
        }
    }
`;
