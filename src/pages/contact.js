import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import HeaderElement from '../components/HeaderElement';
import SpanElement from './../components/SpanElement';

import ContactBlurbs from '../components/ContactBlurbs';
import Locations from '../components/Locations';
import ContactForm from '../components/ContactForm';

import { colors, device, variables } from '../Theme.js';
import SocialPreviewImage from '../images/preview_social_share/contact.jpg';

const StyledPage = styled.div`
    width: auto;
    max-width: ${variables.pageWidthNarrow};
    margin: 0 auto;
    min-height: 75vh;
    margin: 0 auto;
    @media ${device.laptop} {
    }
    * {
        color: white;
    }
`;
const StyledGraph = styled.div`
    width: auto;
    max-width: ${variables.pageWidth};
    min-height: 30vh;
    margin: 0 auto;
    // background-color: white;
    h2 {
        color: ${colors.main};
    }
`;
const StyledSection = styled.section`
    &&& {
        max-width: ${variables.pageWidth};
    }
    margin: 5rem auto;
`;
const StyledBilling = styled.article`
    border: 2px solid;
    padding: 1rem;
    p {
        font-size: 1.7rem;
        line-height: 1.125;
    }
`;
const StyledPad = styled.div`
    // margin: 1rem;
`;

const Contact = ({ pathContext, data }) => {
    return (
        <Layout locale={pathContext.locale} metaImage={SocialPreviewImage}>
            <SEO title="Platform of Trust Contact information" />
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
            <StyledPage className="container">
                <StyledPad>
                    <StyledSection className="contacts container">
                        <HeaderElement tag="h1" content="contact" />
                        <HeaderElement tag="h2" content="contactHeader" />
                        <StyledGraph>
                            <ContactForm />
                        </StyledGraph>
                    </StyledSection>
                    <StyledSection className="contacts container">
                        <HeaderElement tag="h2" content="contactMeetText" />
                        <ContactBlurbs contacts={data.contacts} />
                    </StyledSection>
                    <StyledSection className="locations container">
                        <HeaderElement
                            tag="h2"
                            content="contactOfficeLocations"
                        />
                        <Locations />
                    </StyledSection>
                    <StyledSection className="billing container">
                        <HeaderElement
                            tag="h2"
                            content="contactBillingInformation"
                        />
                        <StyledBilling>
                            <p>Platform of Trust Oy</p>
                            <p>
                                <SpanElement text="contactBillingEInvoicingAddress" />
                            </p>
                            <p>
                                <SpanElement text="contactBillingEInvoicingOperatorName" />
                            </p>
                            <p>
                                <SpanElement text="contactBillingEInvoicingOperatorId" />
                            </p>
                        </StyledBilling>
                    </StyledSection>
                </StyledPad>
            </StyledPage>
        </Layout>
    );
};

const SocialPreviewData = {
    title: 'Platform Of Trust | Contact',
    description:
        'Contact us, request a meeting, meet the team, check office locations, and see billing information.'
};

export const pageQuery = graphql`
    query getContacts($locale: String!) {
        contacts: allMarkdownRemark(
            filter: {
                frontmatter: {
                    subtype: { eq: "contact" }
                    locale: { eq: $locale }
                }
            }
            sort: { order: ASC, fields: [frontmatter___order] }
        ) {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        subtype
                        order
                        name
                        pic
                        title
                        phone
                        email
                        twitter
                        linkedin
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1440) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Contact;
