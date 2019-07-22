import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
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
    padding:1rem;
    background: ${colors.mainDarker};
    transition-duration: 0.3s;
    border: 2px solid ${colors.mainLightest};
    text-align: left;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 0.04em;
    word-spacing: 0.05em;
    line-height: 1.5em;

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

class Faq extends React.Component {
    constructor(props){
        super(props);
    }

    handleTest = (event) => {

        const target = event.target;
        const child = target.querySelector('p');
        const height = target.tagName === 'DIV' ? target.style.maxHeight : target.parentNode.style.maxHeight;

        if (height == '12rem') {
            child.style.display = 'block';
            child.style.opacity = '1';
            target.style.maxHeight = '50rem';
        }   else {

            target.tagName === 'P' || target.tagName === 'HR' ? target.style.display = 'none' : child.style.display  = 'none';

            target.tagName === 'P' || target.tagName === 'HR' ? target.style.opacity = '0' : child.style.opacity = '0';

            target.tagName === 'P' || target.tagName === 'HR' ? target.parentNode.style.maxHeight = '12rem' : target.style.maxHeight = '12rem';
        }
    };

    render(){
        const { edges: posts } = this.props.data.allMdx;
        posts.filter(post => console.log(post.node.frontmatter.question));
        return (
            <Layout>
                <SEO title="FAQ Platform of Trust" />
                <StyledPage>
                    <h1>Frequently Asked Questions</h1>

                    <StyledSection className="container">
                        {posts.map(post => {
                            return (
                                <StyledQuestion onClick={this.handleTest}>{post.node.frontmatter.question}<StyledAnswer><StyledHr />{post.node.frontmatter.answer}</StyledAnswer></StyledQuestion>
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
    allMdx(
        filter: { frontmatter: { type: { eq: "faq" } } }

    ) {
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
