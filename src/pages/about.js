import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import HeaderElement from '../components/HeaderElement';
import SpanElement from './../components/SpanElement';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Video from '../components/Video';
import Logos from '../components/Logos';
import HexIcon from '../components/HexIcon';
import { variables } from '../Theme.js';
import SocialPreviewImage from '../images/preview_social_share/about.jpg';

const StyledPage = styled.div`
    width: auto;
    max-width: ${variables.pageWidthNarrow};
    margin: 0 auto;
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
    margin: 5rem auto;
`;
const StyledVideo = styled.section`
    &&& {
        max-width: ${variables.pageWidth};
    }
    margin: 5rem auto;
`;

const About = ({ data, pathContext }) => {
    return (
        <Layout locale={pathContext.locale} metaImage={SocialPreviewImage}>
            <SEO title="About Platform of Trust" />
            <Helmet
                meta={[
                    {
                        property: 'og:title',
                        content: `${SocialPreviewData.title}`
                    },
                    {
                        property: 'og:description',
                        content: `${SocialPreviewData.description}`
                    },
                    {
                        property: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        property: 'twitter:title',
                        content: `${SocialPreviewData.title}`
                    },
                    {
                        property: 'twitter:description',
                        content: `${SocialPreviewData.description}`
                    }
                ]}
            />
            <StyledPage>
                <StyledSection className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <HeaderElement tag="h1" content="about" />
                            <Img fluid={data.file.childImageSharp.fluid} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                <SpanElement text="aboutText1" />
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <SpanElement text="aboutText2" />
                            </p>
                        </div>
                    </div>
                </StyledSection>
                <StyledSection className="container">
                    <HeaderElement tag="h2" content="forWhom" />
                    <div className="row">
                        <div className="col-4 col-md-2">
                            <HexIcon
                                icon="chart-line"
                                color="main"
                                bgColor="light"
                            />
                        </div>
                        <div className="col-7 col-md-4 d-flex align-items-center">
                            <p>
                                <SpanElement text="aboutText3" />
                            </p>
                        </div>
                        <div className="col-4 col-md-2">
                            <HexIcon
                                icon="terminal"
                                color="main"
                                bgColor="light"
                            />
                        </div>
                        <div className="col-7 col-md-4 d-flex align-items-center">
                            <p>
                                <SpanElement text="aboutText4" />
                            </p>
                        </div>
                    </div>
                </StyledSection>
                <StyledSection className="container">
                    <StyledVideo>
                        <HeaderElement tag="h2" content="aboutVideoText" />
                        <Video
                            videoSrcURL="https://www.youtube.com/embed/sGgt88bkoOA"
                            videoTitle="Start using your data"
                        />
                    </StyledVideo>
                    {/* <Link to="/">
          <CustomRoundedButton label="See our pricing plans" textColor="light" bgColor="tomato" />
        </Link> */}
                </StyledSection>
                <StyledSection className="container">
                    <HeaderElement tag="h2" content="aboutPartnersText" />
                    <Logos />
                </StyledSection>
                <StyledSection className="container">
                    <h3>
                        <SpanElement text="aboutPartText" />{' '}
                        <a href="https://www.tilaajavastuu.fi/en/">
                            Suomen Tilaajavastuu Group
                        </a>
                    </h3>
                </StyledSection>
            </StyledPage>
        </Layout>
    );
};

const SocialPreviewData = {
    title: 'Platform Of Trust | About',
    description:
        'Platform of Trust is a data linking platform that promises to cut your integration costs and helps turn your data into revenue.'
};

export default About;

export const query = graphql`
    query {
        file(relativePath: { eq: "PoT-Infographic.jpg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 1240) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
