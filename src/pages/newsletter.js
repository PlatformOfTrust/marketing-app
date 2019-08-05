import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import NewsletterForm from '../components/NewsletterForm';

import { colors, device, variables } from '../Theme.js';

const StyledPage = styled.div`
  &&& { max-width: ${variables.pageWidth}
  width: auto;
  min-height: 75vh;
  margin: 0 auto;
  @media ${device.laptop} {
  }
  * { color: white }
`;
const StyledSection = styled.article`
    &&& {
        max-width: ${variables.pageWidth};
    }
    margin: 5rem auto;
    padding: 10%;
    background: ${colors.mainDarker};
`;
const StyledPad = styled.div`
    margin: 1rem;
`;

const Newsletter = ({ pathContext }) => {
    return (
        <Layout locale={pathContext.locale}>
            <SEO title="Platform of Trust Contact information" />
            <StyledPage>
                <StyledPad>
                    <StyledSection>
                        <NewsletterForm />
                    </StyledSection>
                </StyledPad>
            </StyledPage>
        </Layout>
    );
};

export default Newsletter;
