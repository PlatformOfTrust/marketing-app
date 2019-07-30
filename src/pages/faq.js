import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Video from '../components/Video';
import Logos from '../components/Logos';
import HexIcon from '../components/HexIcon';
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
`;

const StyledAnswer = styled.p`
    display: none;
    opacity: 0;
    margin: 1rem;
    transition-duration: 0.3s;
    text-align: left;
    font-size: 18px;
    transition-duration: 0.3s;
`;

const StyledHr = styled.hr`
    /* display: none; */
    opacity: 1;
    color: ${colors.mainLightest};
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
        const target = event.target;
        const child =
            target.tagName === 'DIV'
                ? target.querySelector('p')
                : target.parentNode.querySelector('p');
        const height =
            target.tagName === 'DIV'
                ? target.style.maxHeight
                : target.parentNode.style.maxHeight;

        if (height === '12rem' || height === '') {
            child.style.display = 'block';
            child.style.opacity = '1';
            target.style.maxHeight = '50rem';
            target.tagName === 'DIV'
                ? (target.querySelector('span').style.transform =
                      'rotate(-45deg)')
                : (target.style.transform = 'rotate(-45deg)');
        } else {
            if (
                target.tagName === 'P' ||
                target.tagName === 'HR' ||
                target.tagName === 'SPAN'
            ) {
                target.style.display = 'none';
                target.style.opacity = '0';
                target.parentNode.style.maxHeight = '12rem';
                target.parentNode.querySelector('span').style.transform =
                    'rotate(135deg)';
            } else {
                child.style.opacity = '0';
                child.style.display = 'none';
                target.style.maxHeight = '12rem';
                target.querySelector('span').style.transform = 'rotate(135deg)';
            }
        }
    };

    render() {
        const { edges: posts } = this.props.data.allMdx;

        return (
            <Layout>
                <SEO title="FAQ Platform of Trust" />
                <StyledPage>
                    <h1>Frequently Asked Questions</h1>

                    <StyledSection className="container">
                        {posts.map(post => {
                            return (
                                <StyledQuestion onClick={this.handleTest}>
                                    {post.node.frontmatter.question}
                                    <StyledAnswer>
                                        <StyledHr />
                                        {post.node.frontmatter.answer}
                                    </StyledAnswer>
                                    <StyledArrow />
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

export const query = graphql`
    query faqQuery {
        allMdx(filter: { frontmatter: { type: { eq: "faq" } } }) {
            edges {
                node {
                    id
                    frontmatter {
                        question
                        answer
                    }
                }
            }
        }
    }
`;