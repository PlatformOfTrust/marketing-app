// import React, { useState, component } from "react"
import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Disqus from 'gatsby-plugin-disqus';
import styled from 'styled-components';
import LocalizedLink from './../components/LocalizedLink';

import SpanElement from './../components/SpanElement';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomImage from '../components/CustomImage';
import Layout from '../components/Layout';
import { colors, device, variables } from '../Theme.js';

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
        max-width: ${variables.pageWidthNarrow};
    }
    // .row {
    //   margin: 0 1rem;
    //   @media (min-width: 1272px)  { margin: 0 -15px; }
    // }
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
    p {
        line-height: 1.5;
        font-size: 20px;
    }

    a:link {
        font-weight: bold;
        color: #53d2fc;
        text-decoration: none;
        -webkit-transition: color 0.5s;
        transition: color 0.5s;
    }

    a:visited {
        color: #b5a1ff;
    }

    a:hover {
        color: #ffffff;
        cursor: pointer;
    }

    a:active {
        text-decoration: underline;
    }
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
        max-width: ${variables.pageWidth};
    }
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
    @media only screen and (max-width: 640px) {
        p a {
            display: flex;
        }

        p a svg {
            margin-top: 3px;
        }
    }
    margin: 0 auto;
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
        padding-top: 0.5em;
        a {
            color: ${colors.main};
        }
    }
    svg {
        vertical-align: middle;
        // &.fa-hexagon { transform: rotate(90deg); }
        &.fa-arrow-left {
            margin-right: 1rem;
        }
        &.fa-arrow-right {
            margin-left: 1rem;
        }
    }
`;
const StyledCustomImage = styled.div`
    // display: inline-block;
    max-width: 150px;
    margin-bottom: 2rem;
    transform: translateY(1rem) rotate(10deg) scale(1);
    clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
    .gatsby-image-wrapper {
        transform: rotate(-10deg);
    }
    @media only screen and (max-width: 983px) {
        transform: translateY(1.7rem) rotate(10deg) scale(1.5);
    }

    @media only screen and (min-width: 640px) and (max-width: 760px) {
        transform: translateY(0.2rem) rotate(10deg) scale(2.3);
    }

    @media only screen and (min-width: 501px) and (max-width: 600px) {
        transform: translateY(0.2rem) rotate(10deg) scale(3.3);
    }

    @media only screen and (max-width: 500px) {
        transform: translateY(0rem) rotate(10deg) scale(5);
    }
`;
const StyledDisqus = styled.div`
    background: ${colors.mainDarker};
    padding: 1rem 7%;
`;
// const StyledPad = styled.div`
//   margin: 1rem;
// `

export default function Template({ data, location, pageContext }) {
    const post = data.mdx;
    const { next, prev, locale } = pageContext;
    const shortDescription = `${post.frontmatter.date} ${post.excerpt}`;
    const socialPreviewImage = `${post.frontmatter.image.childImageSharp.fluid.src}`;

    console.log(next, prev);
    return (
        <Layout
            pathname={location.pathname}
            locale={locale}
            metaImage={socialPreviewImage}
        >
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
                    }
                ]}
            />
            <StyledBlog>
                <StyledHeader className="container">
                    <div className="row">
                        <LocalizedLink to="/news">
                            <FontAwesomeIcon icon={['fal', 'arrow-left']} />{' '}
                            <SpanElement text="backToNews" />
                        </LocalizedLink>
                        <h1>{post.frontmatter.title}</h1>
                        <StyledMeta>
                            <FontAwesomeIcon
                                icon={['fa', 'hexagon']}
                                color={colors[post.frontmatter.subtype]}
                            />
                            <SpanElement text={post.frontmatter.subtype} />
                            {post.frontmatter.subtype === 'blog' && (
                                <span>{post.frontmatter.author}</span>
                            )}
                            <span>{post.frontmatter.date}</span>
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
                    {post.frontmatter.author && (
                        <div className="row">
                            {post.frontmatter.subtype === 'blog' && (
                                <div className="img col-1 offset-1">
                                    <StyledCustomImage>
                                        <CustomImage
                                            filename={
                                                post.frontmatter.authorpic
                                            }
                                            alt={post.frontmatter.author}
                                        />
                                    </StyledCustomImage>
                                </div>
                            )}
                            <div
                                className={`col-10 ${
                                    post.frontmatter.subtype !== 'blog'
                                        ? 'offset-1'
                                        : ''
                                }`}
                            >
                                <p className="pt-md-5">
                                    {/* <FontAwesomeIcon icon={['fa', 'hexagon']} color="white" size="4x" /> */}
                                    <SpanElement text="author" />{' '}
                                    {post.frontmatter.author}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        <div className="col-10 offset-1">
                            <p>
                                <FontAwesomeIcon
                                    icon={['fal', 'share-alt']}
                                    color="white"
                                    size="1x"
                                />
                                <SpanElement text="sharePiece" />
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
                <StyledDisqus>
                    {post.frontmatter.subtype === 'blog' && (
                        <Disqus
                            identifier={location.pathname}
                            title={post.frontmatter.title}
                            url={location.href}
                        />
                    )}
                </StyledDisqus>
                <StyledBlogFooter>
                    <div className="row">
                        <div className="col col-3 offset-1">
                            <p>
                                {prev && (
                                    <Link to={prev.frontmatter.path}>
                                        <FontAwesomeIcon
                                            icon={['fal', 'arrow-left']}
                                            color="white"
                                            size="1x"
                                        />
                                        <SpanElement text="previous" />
                                        {/* {prev.frontmatter.title} */}
                                    </Link>
                                )}
                            </p>
                        </div>

                        <div className="col col-4">
                            <p>
                                <LocalizedLink to="/news">
                                    <SpanElement text="backToNews" />
                                </LocalizedLink>
                            </p>
                        </div>

                        <div className="col col-3">
                            <p>
                                {next && (
                                    <Link to={next.frontmatter.path}>
                                        <SpanElement text="next" />
                                        {/* {next.frontmatter.title} */}
                                        <FontAwesomeIcon
                                            icon={['fal', 'arrow-right']}
                                            color="white"
                                            size="1x"
                                        />
                                    </Link>
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
    query newsPostByPath($pagePath: String!, $locale: String!) {
        mdx(frontmatter: { path: { eq: $pagePath }, locale: { eq: $locale } }) {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                subtype
                author
                authorpic
                pictext
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
