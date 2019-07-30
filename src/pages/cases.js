import React from 'react';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import MetaTags from 'react-meta-tags';

import LocalizedLink from './../components/LocalizedLink';
import SpanElement from './../components/SpanElement';

// import CustomImage from "../components/CustomImage"
import HexImage from '../components/HexImage';
import CustomSquareButton from '../components/CustomSquareButton';
import Layout from '../components/Layout';
import { colors, variables } from '../Theme.js';
import SocialPreviewImage from '../images/preview_social_share/cases.jpg';
import HeaderElement from '../components/HeaderElement';

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
const StyledBlogs = styled.article`
    padding: 5%;
    .news-not-found {
        text-align: center;
        padding-top: 15.6vh;
        padding-bottom: 15.7vh;
    }

    .news-not-found h2 {
        font-weight: 400;
        font-size: 2.4rem;
    }
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
const StyledBlogBlock = styled.article`
    display: inline-block;
    width: calc(50% - 2rem);
    padding: 1.5rem;
    margin: 1rem;
    border-top: 2px dotted ${colors.main};
    h2 {
        font-size: 1.6rem;
        letter-spacing: 0.01em;
        word-spacing: 0.065em;
        line-height: 1.2em;
    }

    span {
        font-size: 15px;
    }
    p {
        word-spacing: 0.064em;
        line-spacing: 0.048em;
        font-size: 17px;
    }

    &:nth-of-type(1) {
        width: 100%;
        border-top: none;
        h2 {
            font-size: 2.5rem;
            letter-spacing: 0.01em;
            word-spacing: 0.065em;
            line-height: 1.2em;
        }
    }

    &:nth-child(n + 5) {
        width: 100%;
        padding-top: 0;
        padding-bottom: 0;
        .featured-image,
        .excerpt {
            display: none;
        }
        .title {
            order: 2;
        }
        .meta {
            order: 1;
        }
        .post-preview-content {
            width: 100%;
        }
        h2 {
            font-size: 1.6rem;
            word-spacing: 0.065em;
            line-height: 1.2em;
        }
    }

    .post-link {
        text-decoration: none;
    }
    .meta {
        svg {
            margin-right: 0.4em;
        }
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
    // max-width: 250px;
    // // margin-bottom: 2rem;
    transform: translateX(-1rem) rotate(10deg) scale(0.9);
    // clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
`;
const StyledPad = styled.div`
    margin: 1rem;
`;

class Events extends React.Component {
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
        const { filters, selected } = this.state;
        const { edges: posts } = this.props.data.allMdx;
        const socialPreviewImageFullUri =
            typeof window !== 'undefined' &&
            window.location.origin + SocialPreviewImage;

        return (
            <Layout
                locale={this.props.pathContext.locale}
                className="blog-posts"
            >
                <MetaTags>
                    <meta
                        property="og:title"
                        content={SocialPreviewData.title}
                    />
                    <meta
                        property="og:description"
                        content={SocialPreviewData.description}
                    />
                    <meta
                        property="og:image"
                        content={socialPreviewImageFullUri}
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content={SocialPreviewData.title}
                    />
                    <meta
                        name="twitter:description"
                        content={SocialPreviewData.description}
                    />
                    <meta
                        name="twitter:image"
                        content={socialPreviewImageFullUri}
                    />
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
                                <SpanElement
                                    text="all"
                                    onClick={() => this.handleFiltering('all')}
                                />
                            </StyledSelector>
                            {/* <StyledSelector className={`tool-block blog ${ selected[0] === "blog" ? "selected-filter" : "" }`}>
                <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.ok } />
                <span onClick={() => this.handleFiltering("blog")}>Blogs</span>
              </StyledSelector>
              <StyledSelector className={`tool-block pressRelease ${ selected[0] === "pressRelease" ? "selected-filter" : "" }`}>
                <FontAwesomeIcon icon={['fa', 'hexagon']} color={ colors.alert } />
                <span onClick={() => this.handleFiltering("pressRelease")}>Press releases</span>
              </StyledSelector> */}
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
                                    size="1x"
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
                                    size="1x"
                                />
                                <SpanElement
                                    text="technical"
                                    onClick={() =>
                                        this.handleFiltering('technical')
                                    }
                                />
                            </StyledSelector>
                        </StyledTools>
                        <StyledBlogs className="posts">
                            <HeaderElement tag="h1" content="cases" />
                            {posts.filter(post =>
                                filters.includes(post.node.frontmatter.subtype)
                            ).length === 0 && (
                                <div className="col-12 news-not-found">
                                    <h2>
                                        Sorry, nothing here for now. See the
                                        other filters.
                                    </h2>
                                </div>
                            )}
                            {posts
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
                                                <LocalizedLink
                                                    to={post.frontmatter.path}
                                                    className="post-link"
                                                >
                                                    <StyledHexImage>
                                                        {/* <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} /> */}
                                                        <HexImage
                                                            pic={require(`.${post.frontmatter.path}/${post.frontmatter.pic}`)}
                                                            hexId={`EventHex-${post.id}`}
                                                            rotate={true}
                                                        />
                                                    </StyledHexImage>
                                                </LocalizedLink>
                                            </div>
                                            <div className="post-preview-content">
                                                <div className="title">
                                                    <LocalizedLink
                                                        to={
                                                            post.frontmatter
                                                                .path
                                                        }
                                                        className="post-link"
                                                    >
                                                        <h2>
                                                            {
                                                                post.frontmatter
                                                                    .title
                                                            }
                                                        </h2>
                                                    </LocalizedLink>
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
                                                        {post.frontmatter
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
                                                        <span>
                                                            {
                                                                post.frontmatter
                                                                    .date
                                                            }
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="excerpt">
                                                    <LocalizedLink
                                                        to={
                                                            post.frontmatter
                                                                .path
                                                        }
                                                        className="post-link"
                                                    >
                                                        <p>{post.excerpt}</p>
                                                        <CustomSquareButton label="read" />
                                                    </LocalizedLink>
                                                </div>
                                            </div>
                                        </StyledBlogBlock>
                                    );
                                })}
                        </StyledBlogs>
                    </StyledSection>
                </StyledPad>
            </Layout>
        );
    }
}

const SocialPreviewData = {
    title: 'Platform Of Trust | Cases',
    description:
        'Platform of Trust use cases, examples of how the platform works in practice and how it helps create business ecosystems.'
};

export const pageQuery = graphql`
    query caseQuery {
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
`;

export default Events;
