import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

// import CustomImage from "../components/CustomImage"
import HexImage from '../components/HexImage'
import CustomSquareButton from '../components/CustomSquareButton'
import Layout from '../components/layout'
import { colors, variables } from '../Theme.js'

export const subtypeColors = {
  blog: `${colors.ok}`,
  news: `${colors.notice}`,
  article: `${colors.alert}`,
  business: `${colors.success}`,
  technical: `${colors.mainLightest}`,
}

const StyledSection = styled.article`
  &&& { max-width: ${variables.pageWidthNarrow} }
  margin: 5rem auto;
  // background: ${colors.mainDarker}
`
const StyledBlogs = styled.article`
  padding: 5%;
`
const StyledTools = styled.nav`
  // background: ${colors.mainDarkest}; 
  padding: 0.4rem;
`
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
`
const StyledBlogBlock = styled.article`
  display: inline-block;
  width: calc(50% - 2rem);
  padding: 1.5rem;
  margin: 1rem;
  border-top: 2px dotted ${colors.main};
  h2 {
    font-size: 1.4rem;
  }

  &:nth-of-type(1) {
    width: 100%;
    border-top: none;
    h2 {
      font-size: 2.4rem;
    }
  }

  &:nth-child(n + 5) {
    width: 100%;
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
      font-size: 2.4rem;
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
`
const StyledHexImage = styled.div`
  width: 85%;
  // max-width: 250px;
  // // margin-bottom: 2rem;
  transform: translateX(-1rem) rotate(10deg) scale(0.9);
  // clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
`
const StyledPad = styled.div`
  margin: 1rem;
`

export default class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: ['blog', 'article', 'pressRelease', 'business', 'technical'],
      selected: 'all',
      showFooter: true,
    }
  }

  handleFiltering = filter => {
    filter === 'all'
      ? this.setState({
          filters: ['blog', 'article', 'pressRelease', 'business', 'technical'],
        })
      : this.setState({ filters: [filter] })
    this.setState({ selected: [filter] })
  }

  render() {
    const { filters, selected } = this.state
    const { edges: posts } = this.props.data.allMdx
    return (
      <Layout className="blog-posts">
        <StyledPad>
          <StyledSection className="posts-listing">
            <StyledTools className="filters">
              <StyledSelector
                className={`tool-block all ${
                  selected[0] === 'all' ? 'selected-filter' : ''
                }`}
              >
                <span onClick={() => this.handleFiltering('all')}>All</span>
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
                  selected[0] === 'business' ? 'selected-filter' : ''
                }`}
              >
                <FontAwesomeIcon
                  icon={['fa', 'hexagon']}
                  color={colors.success}
                  size="1x"
                />
                <span onClick={() => this.handleFiltering('business')}>
                  Business
                </span>
              </StyledSelector>
              <StyledSelector
                className={`tool-block article ${
                  selected[0] === 'technical' ? 'selected-filter' : ''
                }`}
              >
                <FontAwesomeIcon
                  icon={['fa', 'hexagon']}
                  color={colors.mainLightest}
                  size="1x"
                />
                <span onClick={() => this.handleFiltering('technical')}>
                  Technical
                </span>
              </StyledSelector>
            </StyledTools>
            <StyledBlogs className="posts">
              <h1>Cases</h1>

              {posts
                .filter(post => filters.includes(post.node.frontmatter.subtype))
                .map(({ node: post }) => {
                  return (
                    <StyledBlogBlock className="post-preview" key={post.id}>
                      <div className="featured-image">
                        <Link to={post.frontmatter.path} className="post-link">
                          <StyledHexImage>
                            {/* <CustomImage filename={post.frontmatter.pic} alt={post.frontmatter.title} /> */}
                            <HexImage
                              pic={require(`.${post.frontmatter.path}/${
                                post.frontmatter.pic
                              }`)}
                              hexId={`EventHex-${post.id}`}
                              rotate={true}
                            />
                          </StyledHexImage>
                        </Link>
                      </div>
                      <div className="post-preview-content">
                        <div className="title">
                          <Link
                            to={post.frontmatter.path}
                            className="post-link"
                          >
                            <h2>{post.frontmatter.title}</h2>
                          </Link>
                        </div>
                        <div className="meta">
                          <p>
                            <FontAwesomeIcon
                              icon={['fa', 'hexagon']}
                              color={subtypeColors[post.frontmatter.subtype]}
                            />
                            {post.frontmatter.subtype && (
                              <>
                                <span>{post.frontmatter.subtype}</span>
                                <span className="divider">.</span>
                              </>
                            )}
                            <span>{post.frontmatter.date}</span>
                          </p>
                        </div>
                        <div className="excerpt">
                          <Link
                            to={post.frontmatter.path}
                            className="post-link"
                          >
                            <p>{post.excerpt}</p>
                            <CustomSquareButton label="Read" />
                          </Link>
                        </div>
                      </div>
                    </StyledBlogBlock>
                  )
                })}
            </StyledBlogs>
          </StyledSection>
        </StyledPad>
      </Layout>
    )
  }
}
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
`
