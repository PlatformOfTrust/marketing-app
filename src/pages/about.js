import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import MetaTags from 'react-meta-tags';

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

const About = ({ data, pathContext }) => (
    <Layout locale={pathContext.locale}>
        <SEO title="About Platform of Trust" />
        <MetaTags>
            <meta property="og:title" content={SocialPreviewData.title} />
            <meta name="description" content={SocialPreviewData.description} />
            <meta property="og:image" content={SocialPreviewImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={SocialPreviewData.title} />
            <meta
                name="twitter:description"
                content={SocialPreviewData.description}
            />
            <meta name="twitter:image" content={SocialPreviewImage} />
        </MetaTags>
        <StyledPage>
            <StyledSection className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <h1>About</h1>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            Communally built Platform of Trust is a platform
                            that makes data move between systems and
                            organisations. It makes knowledge-based decisions
                            possible but also creates grounds for new business
                            models with harmonised data.{' '}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Platform of Trust differs from other platforms with
                            a built-in trust engine that makes sure both the
                            data producers and data users are trustworthy.{' '}
                        </p>
                    </div>
                </div>
            </StyledSection>
            <StyledSection className="container">
                <h2>For whom</h2>
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
                            Any business that is using or planning to use data
                            for business development and new business models.
                        </p>
                    </div>
                    <div className="col-4 col-md-2">
                        <HexIcon icon="terminal" color="main" bgColor="light" />
                    </div>
                    <div className="col-7 col-md-4 d-flex align-items-center">
                        <p>
                            Developers that long for faster time-to-market and
                            want to experience high-quality developer
                            experience.
                        </p>
                    </div>
                </div>
            </StyledSection>
            <StyledSection className="container">
                <StyledVideo>
                    <h2>
                        Platform of Trust benefits in one minute by CEO Toni
                        Luhti
                    </h2>
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
                <h2>Our partners and customers</h2>
                <Logos />
            </StyledSection>
            <StyledSection className="container">
                <h3>
                    Platform of Trust is part of{' '}
                    <a href="https://www.tilaajavastuu.fi/en/">
                        Suomen Tilaajavastuu Group
                    </a>
                </h3>
            </StyledSection>
        </StyledPage>
    </Layout>
);

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
