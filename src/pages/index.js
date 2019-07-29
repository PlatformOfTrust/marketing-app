import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MetaTags from 'react-meta-tags';
import LocalizedLink from './../components/LocalizedLink';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import HexBlurb from '../components/HexBlurb';
import CustomRoundedButton from '../components/CustomRoundedButton';
import ToolsIntro from '../components/ToolsIntro';
import FeaturedNews from '../components/FeaturedNews';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';
import { colors, variables } from '../Theme.js';
import SocialPreviewImage from '../images/preview_social_share/home.jpg';

const StyledMain = styled.main`
    &&& {
        max-width: ${variables.pageWidth};
    }
    margin: 0 auto;
`;
const StyledBenefits = styled.ul`
    font-size: 1.4rem;
    list-style: none;
    li {
        margin-bottom: 1em;
        line-height: 1.125em;
    }
    svg {
        position: absolute;
        margin-left: -1.2em;
        path {
            color: white;
        }
    }
`;
const StyledPartners = styled.div`
    p {
        display: inline-block;
        margin-right: 0.4em;
        &:after {
            // content: "";
        }
    }
`;

const IndexPage = ({ data, pathContext }) => {
    const testContent = data.allContent.edges[0].node;
    const contents = data.allContent.edges;
    const socialPreviewImageFullUri =
        window.location.origin + SocialPreviewImage;
    return (
        <Layout locale={pathContext.locale}>
            <MetaTags>
                <meta property="og:title" content={SocialPreviewData.title} />
                <meta
                    property="og:description"
                    content={SocialPreviewData.description}
                />
                <meta property="og:image" content={socialPreviewImageFullUri} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={SocialPreviewData.title} />
                <meta
                    name="twitter:description"
                    content={SocialPreviewData.description}
                />
                <meta
                    name="twitter:image"
                    content={socialPreviewImageFullUri}
                />
            </MetaTags>
            <SEO title="Home" keywords={[`Platform of Trust`]} />
            <StyledMain className="home page-content container">
                <div className="dev-test" style={{ display: 'none' }}>
                    <div
                        key={testContent.id}
                        dangerouslySetInnerHTML={{ __html: testContent.html }}
                    />
                    {contents
                        .filter(
                            content =>
                                content.node.frontmatter.section === 'foo'
                        )
                        .map(({ node }) => {
                            return (
                                <div
                                    key={node.id}
                                    dangerouslySetInnerHTML={{
                                        __html: node.html
                                    }}
                                />
                            );
                        })}
                </div>
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-lg-7">
                        <Hero />
                        <FeaturedNews />
                    </div>
                    <div className="col-9 offset-3 col-sm-6 offset-sm-3 col-lg-3 offset-lg-0">
                        <Featured />
                    </div>
                </div>
                <div className="row mt-5">
                    {contents
                        .filter(
                            content =>
                                content.node.frontmatter.section === 'intro'
                        )
                        .map(({ node }) => {
                            // console.log('[index.js] ContentMapping:', node )
                            return (
                                <div
                                    key={node.id}
                                    id="intro"
                                    dangerouslySetInnerHTML={{
                                        __html: node.html
                                    }}
                                    className="col-md-10 col-lg-5 offset-md-1 mb-5"
                                />
                            );
                        })}
                    <div className="col-6 offset-md-1 col-lg-3 offset-lg-0">
                        <StyledBenefits>
                            {contents
                                .filter(
                                    content =>
                                        content.node.frontmatter.section ===
                                        'benefits'
                                )
                                .map(({ node }) => {
                                    // console.log('[index.js] ContentMapping:', node )
                                    return (
                                        <li className="benefit" key={node.id}>
                                            <FontAwesomeIcon
                                                icon={['fal', 'check-circle']}
                                                size="1x"
                                            />
                                            {node.html.replace(/<[^>]*>/g, '')}
                                        </li>
                                    );
                                })}
                        </StyledBenefits>
                    </div>
                    <div className="col-6 col-md-3">
                        <LocalizedLink to="/newsletter">
                            <CustomRoundedButton label="Signup for news" />
                        </LocalizedLink>
                    </div>
                </div>

                <div className="row mt-3">
                    {contents
                        .filter(
                            content =>
                                content.node.frontmatter.section ===
                                'definition'
                        )
                        .map(({ node }) => {
                            return (
                                <div
                                    key={node.id}
                                    id="definition"
                                    dangerouslySetInnerHTML={{
                                        __html: node.html
                                    }}
                                    className="col-md-10 offset-md-1 mt-5"
                                />
                            );
                        })}
                </div>

                <div className="row mt-3 mb-5">
                    <div className="col-12 col-md-10 offset-md-1 ">
                        <div id="hex-blurbs" className="row">
                            {contents
                                .filter(
                                    content =>
                                        content.node.frontmatter.section ===
                                        'hex-blurbs'
                                )
                                .map(({ node }) => {
                                    return (
                                        <div
                                            className="hex-blurb col-10 offset-1 col-md-6 offset-md-0 col-lg-3"
                                            key={node.id}
                                        >
                                            <HexBlurb
                                                title={node.html.replace(
                                                    /<[^>]*>/g,
                                                    ''
                                                )}
                                                icon={node.frontmatter.icon}
                                                textColor={colors.main}
                                                bgColor="light"
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                {/* <div className="row mt-5">
          <div className="col-12">
            <h2>What if you <strong>used</strong> your data?</h2>
          </div>
        </div> */}

                {/* <div className="row mt-5">
          <SavedVizs />
        </div> */}

                <div className="row mt-5">
                    <ToolsIntro />
                </div>

                {/* <div className="row mt-5">
          <div className="col-12">
            <h2 className="mb-5">Enjoy the benefits:</h2>
            <PricingCards />
          </div>
        </div> */}

                {/* <div className="row">
          <div className="col-lg-4 text-left">
            <CustomRoundedButton label="Book online presentation"/>
          </div>
          <div className="col-lg-2 offset-md-6 text-right">
            <CustomRoundedButton label="Get started"/>
          </div>
        </div> */}

                <div className="row mt-5">
                    <div className="col-md-10 offset-md-1 mb-3">
                        <h2>Here are some of our partners and first users</h2>
                    </div>
                    <StyledPartners id="partners" className="col-10 offset-1">
                        {contents
                            .filter(
                                content =>
                                    content.node.frontmatter.section ===
                                    'partners'
                            )
                            .map(({ node }) => {
                                return (
                                    <div
                                        key={node.id}
                                        dangerouslySetInnerHTML={{
                                            __html: node.html
                                        }}
                                    />
                                );
                            })}
                        {/* <p>
              Kojamo Oyj  &middot;  Keskinäinen työeläkevakuutusyhtiö Varma  &middot;  Tampereen Tilapalvelut Oy, GSP Group Oy  &middot;  Hämeen ammattikorkeakoulu HAMK  &middot;  Forum Virium Helsinki  &middot;  Honkio Oy  &middot;  Cozify Oy  &middot; Flexitila / Joustotoimisto Oy  &middot;  Metropolia Ammattikorkeakoulu  &middot;  Senaatti-kiinteistöt, Suomen Yliopistokiinteistöt Oy  &middot;  Tieto Oyj  &middot;  Granlund Oy  &middot;  Digital Living International Oy  &middot;  Tunninen Oy Finland  &middot;  Teknologian tutkimuskeskus VTT Oy  &middot; Locia Oy  &middot;  Sport Venue Oy.
            </p>  */}
                        {/* <CustomRoundedButton className="ml-0" label="become reseller"/> */}
                    </StyledPartners>
                </div>
            </StyledMain>
        </Layout>
    );
};

const SocialPreviewData = {
    title: 'Platform Of Trust | Home',
    description:
        'Platform of Trust harmonizes incompatible data and makes it flow to enable automated business ecosystems and knowledge-based decision making.'
};

export const query = graphql`
    query {
        allContent: allMarkdownRemark(
            filter: { frontmatter: { page: { eq: "index" } } }
            sort: { order: ASC, fields: [frontmatter___order] }
        ) {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        section
                        icon
                    }
                }
            }
        }
    }
`;

export default IndexPage;
