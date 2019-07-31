import React from 'react';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import MetaTags from 'react-meta-tags';

import LocalizedLink from './../components/LocalizedLink';

import HexImage from '../components/HexImage';
import Layout from '../components/Layout';
import CustomRoundedButton from '../components/CustomRoundedButton';
import CustomSquareButton from '../components/CustomSquareButton';
import { colors, device, variables } from '../Theme.js';
import SocialPreviewImage from '../images/preview_social_share/news.jpg';

import HeaderElement from '../components/HeaderElement';
import SpanElement from './../components/SpanElement';

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
    width: 100%;
    @media ${device.laptop} {
        width: calc(50% - 2rem);
    }
    padding: 1.5rem;
    margin: 1rem;
    border-top: 2px dotted ${colors.main};
    h2 {
        font-size: 1.6rem;
        letter-spacing: 0.02em;
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
const StyledBlogFooter = styled.div`
  &&& { max-width: ${variables.pageWidth} }
  margin: 0 auto;
  padding: 2rem 0;
  // background: ${colors.mainDarker};
  border-top: 2px dotted white;
  // .col { border: 1px solid; }
  .col:nth-of-type(2) { text-align: center; }
  .col:nth-of-type(3) { text-align: right; }
  p {
    padding-top: 0.5em;
    a { color: ${colors.light}; }
  }
  svg {
    vertical-align: middle;
    // &.fa-hexagon { transform: rotate(90deg); }
    &.fa-arrow-left { margin-right: 1rem; }
    &.fa-arrow-right { margin-left: 1rem; }
  }
  .pagination-number {
    margin: 0 0.5em;
    padding: 0.5em;
    display: inline-block;
    width: 2.0em;
    height: 2.0em;
    background: ${colors.mainDark};
    border-radius: 50%;
    &.current {
      font-weight: 900;
      color: ${colors.main};
      background: ${colors.light};
      border: 2px dotted ${colors.main};
      padding: 0.6em;
      width: 2.4em;
      height: 2.4em;
    }
  }
`;

let items = null;

export default class NewsList extends React.Component {
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
            ? this.setState({ filters: ['blog', 'article', 'pressRelease'] })
            : this.setState({ filters: [filter] });
        this.setState({ selected: [filter] });
    };

    render() {
        const { filters, selected } = this.state;
        const posts = this.props.data.allMdx.edges;
        const { currentPage, numPages } = this.props.pageContext;
        const isFirst = currentPage === 1;
        const isLast = currentPage === numPages;
        const prevPage =
            currentPage - 1 === 1
                ? '/news'
                : `/news/${(currentPage - 1).toString()}`;
        const nextPage = `/news/${(currentPage + 1).toString()}`;
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

                            <StyledSelector
                                className={`tool-block blog ${
                                    selected[0] === 'blog'
                                        ? 'selected-filter'
                                        : ''
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={['fa', 'hexagon']}
                                    color={colors.blog}
                                />
                                <SpanElement
                                    text="blogs"
                                    onClick={() => this.handleFiltering('blog')}
                                />
                            </StyledSelector>

                            <StyledSelector
                                className={`tool-block article ${
                                    selected[0] === 'article'
                                        ? 'selected-filter'
                                        : ''
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={['fa', 'hexagon']}
                                    color={colors.article}
                                />
                                <SpanElement
                                    text="articles"
                                    onClick={() =>
                                        this.handleFiltering('article')
                                    }
                                />
                            </StyledSelector>

                            <StyledSelector
                                className={`tool-block pressRelease ${
                                    selected[0] === 'pressRelease'
                                        ? 'selected-filter'
                                        : ''
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={['fa', 'hexagon']}
                                    color={colors.press}
                                />
                                <SpanElement
                                    text="pressReleases"
                                    onClick={() =>
                                        this.handleFiltering('pressRelease')
                                    }
                                />
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
                                    color={colors.business}
                                />
                                <SpanElement
                                    text="business"
                                    onClick={() =>
                                        this.handleFiltering('business')
                                    }
                                />
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
                                    color={colors.technical}
                                />
                                <SpanElement
                                    text="technical"
                                    onClick={() =>
                                        this.handleFiltering('technical')
                                    }
                                />
                            </StyledSelector>
                        </StyledTools>
                        <StyledBlogs className="posts container">
                            <div className="row">
                                <div className="col-6">
                                    <HeaderElement tag="h1" content="news" />
                                </div>
                                <div className="col-6 text-right">
                                    <LocalizedLink to="/newsletter">
                                        <CustomRoundedButton label="signUpForNews" />
                                    </LocalizedLink>
                                </div>
                            </div>
                            <div className="row">
                                {posts.filter(post =>
                                    filters.includes(
                                        post.node.frontmatter.subtype
                                    )
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
                                    .map(({ node: post }, index) => {
                                        items = index + 1;
                                        return (
                                            <StyledBlogBlock
                                                className="post-preview"
                                                key={post.id}
                                            >
                                                {/* {items} */}
                                                <div className="featured-image">
                                                    <Link
                                                        to={
                                                            post.frontmatter
                                                                .path
                                                        }
                                                        className="post-link"
                                                    >
                                                        <StyledHexImage>
                                                            {/* <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} /> */}
                                                            <HexImage
                                                                pic={require(`./../pages/static/${post.frontmatter.pic}`)}
                                                                hexId={`NewHex-${post.id}`}
                                                                rotate={true}
                                                            />
                                                        </StyledHexImage>
                                                    </Link>
                                                </div>
                                                <div className="post-preview-content">
                                                    <div className="title">
                                                        <Link
                                                            to={
                                                                post.frontmatter
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
                                                    </div>
                                                    <div className="meta">
                                                        <p>
                                                            <FontAwesomeIcon
                                                                icon={[
                                                                    'fa',
                                                                    'hexagon'
                                                                ]}
                                                                color={
                                                                    colors[
                                                                        post
                                                                            .frontmatter
                                                                            .subtype
                                                                    ]
                                                                }
                                                            />
                                                            {post.frontmatter
                                                                .subtype && (
                                                                <>
                                                                    <SpanElement
                                                                        text={
                                                                            post
                                                                                .frontmatter
                                                                                .subtype
                                                                        }
                                                                    />
                                                                    <span className="divider">
                                                                        .
                                                                    </span>
                                                                </>
                                                            )}
                                                            {post.frontmatter
                                                                .subtype ===
                                                                'blog' && (
                                                                <>
                                                                    <span>
                                                                        {
                                                                            post
                                                                                .frontmatter
                                                                                .author
                                                                        }
                                                                    </span>
                                                                    <span className="divider">
                                                                        .
                                                                    </span>
                                                                </>
                                                            )}
                                                            <span>
                                                                {
                                                                    post
                                                                        .frontmatter
                                                                        .date
                                                                }
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="excerpt">
                                                        <Link
                                                            to={
                                                                post.frontmatter
                                                                    .path
                                                            }
                                                            className="post-link"
                                                        >
                                                            <p>
                                                                {post.excerpt}
                                                            </p>
                                                            <CustomSquareButton label="read" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </StyledBlogBlock>
                                        );
                                    })}
                            </div>
                        </StyledBlogs>

                        {(numPages > 1 || !isFirst) && (
                            <StyledBlogFooter>
                                <div className="row">
                                    <div className="col col-3 offset-1">
                                        {!isFirst && (
                                            <p>
                                                <LocalizedLink to={prevPage}>
                                                    <FontAwesomeIcon
                                                        icon={[
                                                            'fal',
                                                            'arrow-left'
                                                        ]}
                                                        color="white"
                                                        size="1x"
                                                    />
                                                    <SpanElement text="previousPage" />
                                                </LocalizedLink>
                                            </p>
                                        )}
                                    </div>

                                    <div className="col col-4">
                                        {Array.from(
                                            { length: numPages },
                                            (_, i) => (
                                                <LocalizedLink
                                                    className={`pagination-number ${
                                                        i + 1 === currentPage
                                                            ? 'current'
                                                            : ''
                                                    }`}
                                                    key={`pagination-number${i +
                                                        1}`}
                                                    to={`/news/${
                                                        i === 0 ? '' : i + 1
                                                    }`}
                                                >
                                                    {i + 1}
                                                </LocalizedLink>
                                            )
                                        )}
                                    </div>

                                    <div className="col col-3">
                                        {!isLast && (
                                            <p>
                                                <LocalizedLink to={nextPage}>
                                                    More news
                                                    <FontAwesomeIcon
                                                        icon={[
                                                            'fal',
                                                            'arrow-right'
                                                        ]}
                                                        color="white"
                                                        size="1x"
                                                    />
                                                </LocalizedLink>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </StyledBlogFooter>
                        )}
                    </StyledSection>
                </StyledPad>
            </Layout>
        );
    }
}

const SocialPreviewData = {
    title: 'Platform Of Trust | News',
    description:
        'Platform of Trust news, blog posts, press releases, and articles. Topics: platform economy, data, sustainability, data-based ecosystems, and smart city.'
};

export const newsListQuery = graphql`
    query newsListQuery($skip: Int!, $limit: Int!, $locale: String!) {
        allMdx(
            filter: {
                frontmatter: { type: { eq: "news" }, locale: { eq: $locale } }
            }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
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
