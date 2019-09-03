import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { variables, colors } from '../Theme.js';

const StyledPage = styled.div`
    width: auto;
    max-width: ${variables.pageWidthNarrow};
    margin: 5rem auto;
    * {
        color: white;
    }
    a:link {
        text-decoration: underline dotted;
    }
`;
const StyledSection = styled.section`
    &&& {
        max-width: ${variables.pageWidth};
    }
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
`;
const StyledQuestion = styled.div`
    margin: 0.5rem;
    max-height: 12rem;
    width: 24rem;
    padding: 1rem;
    background: ${colors.mainDarker};
    transition-duration: 0.5s;
    border: 2px solid ${colors.mainLightest};
    text-align: left;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 0.04em;
    word-spacing: 0.05em;
    line-height: 1.5em;
    position: relative;

    &&&:hover {
        transform: scale(1.05);
        box-shadow: 0 0 5px 2px ${colors.mainLightest};
    }

    &&&:active {
        transform: scale(1);
        box-shadow: 0 0 5px 2px ${colors.mainLightest};
        transition-duration: 0.1s;
    }

    p {
        display: none;
        opacity: 0;
        margin: 1rem;
        transition-duration: 0.3s;
        text-align: left;
        font-size: 18px;
        transition-duration: 0.3s;
    }
`;

const StyledArrow = styled.span`
    height: 10px;
    width: 10px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    border-top: 2px solid ${colors.mainLightest};
    border-right: 2px solid ${colors.mainLightest};
    transform: rotate(135deg);
    transition-duration: 0.5s;
`;

class Faq extends React.Component {
    constructor(props) {
        super(props);
    }

    handleTest = event => {
        const target = event.currentTarget;
        const child =
            target.tagName === 'DIV'
                ? target.querySelector('p')
                : target.parentNode.querySelector('p');
        const height =
            target.tagName === 'DIV'
                ? target.style.maxHeight
                : target.parentNode.style.maxHeight;

        const arrow = event.currentTarget.querySelector('#drop-arrow');
        arrow.style.transform == 'rotate(-45deg)'
            ? (arrow.style.transform = 'rotate(135deg)')
            : (arrow.style.transform = 'rotate(-45deg)');

        if (height === '12rem' || height === '') {
            child.style.display = 'block';
            child.style.opacity = '1';
            target.style.maxHeight = '50rem';
        } else {
            if (
                target.tagName === 'P' ||
                target.tagName === 'HR' ||
                target.tagName === 'SPAN'
            ) {
                target.style.display = 'none';
                target.style.opacity = '0';
                target.parentNode.style.maxHeight = '12rem';
            } else {
                child.style.opacity = '0';
                child.style.display = 'none';
                target.style.maxHeight = '12rem';
            }
        }
    };

    render() {
        console.log(this);
        const { edges: posts } = this.props.data.allMdx;
        const { locale } = this.props.pageContext;
        return (
            <Layout locale={locale}>
                <SEO title="FAQ Platform of Trust" />
                <StyledPage>
                    <h1>Frequently Asked Questions</h1>

                    <StyledSection className="container">
                        {posts.map((post, key) => {
                            return (
                                <StyledQuestion
                                    key={key}
                                    onClick={this.handleTest}
                                >
                                    {post.node.frontmatter.question}

                                    <MDXRenderer>
                                        {post.node.code.body}
                                    </MDXRenderer>
                                    <StyledArrow id="drop-arrow" />
                                </StyledQuestion>
                            );
                        })}
                    </StyledSection>
                </StyledPage>
            </Layout>
        );
    }
}

export default Faq;

/* Add locale when available */
export const query = graphql`
    query faqQuery {
        allMdx(filter: { frontmatter: { type: { eq: "faq" } } }) {
            edges {
                node {
                    id
                    frontmatter {
                        question
                    }
                    code {
                        body
                    }
                }
            }
        }
    }
`;
