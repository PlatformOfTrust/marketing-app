import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';
import LocalizedLink from './../components/LocalizedLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout';
import { colors, device, variables } from '../Theme.js';
import SomeIcons from '../components/SomeIcons';
import SpanElement from '../components/SpanElement';

const StyledBlog = styled.article`
    &&& {
        max-width: ${variables.pageWidthNarrow};
    }
    margin: 0 auto;
    padding: 1rem;
    @media ${device.laptop} {
    }
`;
const StyledHeader = styled.header`
    margin-bottom: 1rem;
    &&& {
        max-width: ${variables.pageWidth};
    }
    &&& a {
        font-size: 1.2rem;
        text-decoration: none;
    }
    &&& .row {
        margin-top: 50px;
    }
    h1 {
        margin-top: 0.4em;
        color: white;
        text-align: left;
        width: 100%;
    }
`;
const StyledMeta = styled.div`
    // display: block;
    text-transform: capitalize;
    * {
        margin-right: 0.5em;
    }
`;
const StyledPost = styled.div`
    &&& {
        max-width: ${variables.pageWidth};
    }
    position: relative;
    background: ${colors.mainDarker};
`;
const StyledCaption = styled.div`
  width: 100%
  position: absolute;
  transform: translateY(-100%);
  background: linear-gradient(to bottom, rgba(0,0,0,0), ${colors.mainDarker} 100%);
  padding: 4rem 10% 0;
  justify-content: flex-end;
  p {
    max-width: 30%;
    border-top: 2px dotted white;
    padding-top: 1em;
    font-size: 1rem;
    color: white;
  }
`;
const StyledPostFooter = styled.div`
    &&& {
        max-width: ${variables.pageWidthNarrow};
    }
    margin: 0 auto;
    padding: 2rem 0;
    background: ${colors.mainDarker};
    p {
        color: white;
    }
    svg {
        margin-right: 1rem;
        vertical-align: middle;
        &.fa-hexagon {
            transform: rotate(90deg);
        }
        &.fa-arrow-right {
            margin-left: 1rem;
        }
    }
`;
const StyledBlogFooter = styled.div`
    &&& {
        max-width: ${variables.pageWidth};
    }
    padding: 2rem 0;
    background: ${colors.mainDarker};
    border-top: 2px dotted white;
    // .col { border: 1px solid; }
    .col:nth-of-type(2) {
        text-align: center;
    }
    .col:nth-of-type(3) {
        text-align: right;
    }
    p {
        color: white;
    }
    svg {
        // margin-right: 1rem;
        vertical-align: middle;
        // &.fa-hexagon { transform: rotate(90deg); }
        // &.fa-arrow-right { margin-left: 1rem; }
    }
`;

export default function Template({ data, location, pageContext }) {
    const post = data.mdx;
    const { next, prev, locale } = pageContext;

    const socialPreviewImageFullUri = `${location.origin}${post.frontmatter.image.childImageSharp.fluid.src}`;
    const shortDescription = `${post.frontmatter.date} ${post.excerpt}`;

    return (
        <Layout pathname={location.pathname} locale={locale}>
            <Helmet
                title={`Platform of Trust - ${post.frontmatter.title}`}
                meta={[
                    {
                        property: 'og:title',
                        content: `Platform of Trust - ${post.frontmatter.title}`
                    },
                    {
                        property: 'og:description',
                        content: shortDescription
                    },
                    {
                        property: 'og:image',
                        content: `${socialPreviewImageFullUri}`
                    },
                    {
                        property: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        property: 'twitter:title',
                        content: `Platform of Trust - ${post.frontmatter.title}`
                    },
                    {
                        property: 'twitter:description',
                        content: shortDescription
                    },
                    {
                        property: 'twitter:image',
                        content: `${socialPreviewImageFullUri}`
                    }
                ]}
            />
            <StyledBlog>
                <StyledHeader className="container">
                    <div className="row">
                        <LocalizedLink to="/cases">
                            <FontAwesomeIcon icon={['fal', 'arrow-left']} />{' '}
                            Back to cases
                        </LocalizedLink>
                        <h1>{post.frontmatter.title}</h1>
                        <StyledMeta>
                            <FontAwesomeIcon
                                icon={['fa', 'hexagon']}
                                color={colors[post.frontmatter.subtype]}
                            />
                            <span>{post.frontmatter.subtype}</span>
                        </StyledMeta>
                    </div>
                </StyledHeader>
                <StyledPost className="container">
                    <div className="row">
                        {post.frontmatter.image && (
                            <Img
                                fluid={
                                    post.frontmatter.image.childImageSharp.fluid
                                }
                                className="col-12"
                            />
                        )}
                    </div>
                    <StyledCaption className="row">
                        <p>{post.frontmatter.pictext}</p>
                    </StyledCaption>
                    <div className="row">
                        <div className="blog-post-content col-10 offset-1 pt-5">
                            <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
                        </div>
                    </div>
                </StyledPost>
                <StyledPostFooter className="container">
                    <div className="row">
                        <div className="col-10 offset-1">
                            <p>
                                <FontAwesomeIcon
                                    icon={['fal', 'share-alt']}
                                    color="white"
                                    size="1x"
                                />
                                Come on, share this piece. You know you want to.
                                <FontAwesomeIcon
                                    icon={['fal', 'arrow-right']}
                                    color="white"
                                    size="1x"
                                />
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=https://www.platformoftrust.net${post.frontmatter.path}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={['fab', 'facebook-square']}
                                        color="white"
                                        size="1x"
                                    />
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=https://www.platformoftrust.net${post.frontmatter.path}%2F&via=PlatformOfTrust`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={['fab', 'twitter-square']}
                                        color="white"
                                        size="1x"
                                    />
                                </a>
                                <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.platformoftrust.net${post.frontmatter.path}&title=${post.frontmatter.title}&source=${post.frontmatter.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={['fab', 'linkedin']}
                                        color="white"
                                        size="1x"
                                    />
                                </a>
                            </p>
                        </div>
                    </div>
                </StyledPostFooter>
                <StyledBlogFooter>
                    <div className="row">
                        <div className="col col-3 offset-1">
                            <p>
                                {prev && (
                                    <LocalizedLink to={prev.frontmatter.path}>
                                        <FontAwesomeIcon
                                            icon={['fal', 'arrow-left']}
                                            color="white"
                                            size="1x"
                                        />
                                        <SpanElement text="previous" />
                                        {/* {prev.frontmatter.title} */}
                                    </LocalizedLink>
                                )}
                            </p>
                        </div>

                        <div className="col col-4">
                            <p>
                                <LocalizedLink to="/cases">
                                    Back to cases
                                </LocalizedLink>
                            </p>
                        </div>

                        <div className="col col-3">
                            <p>
                                {next && (
                                    <LocalizedLink to={next.frontmatter.path}>
                                        <SpanElement text="next" />
                                        {/* {next.frontmatter.title} */}
                                        <FontAwesomeIcon
                                            icon={['fal', 'arrow-right']}
                                            color="white"
                                            size="1x"
                                        />
                                    </LocalizedLink>
                                )}
                            </p>
                        </div>
                    </div>
                </StyledBlogFooter>
            </StyledBlog>
        </Layout>
    );
}

export const pageQuery = graphql`
    query casePostByPagePath($pagePath: String!, $locale: String!) {
        mdx(frontmatter: { path: { eq: $pagePath }, locale: { eq: $locale } }) {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                subtype
                author
                authorpic
                pictext
                pic
                image {
                    childImageSharp {
                        fluid(maxWidth: 1440) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            code {
                body
            }
            excerpt(pruneLength: 120)
        }
    }
`;
