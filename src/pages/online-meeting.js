import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import OnlineMeetingForm from '../components/OnlineMeetingForm';

import { colors, device, variables } from '../Theme.js';

const StyledPage = styled.div`
    &&& {
        max-width: ${variables.pageWidth};
        width: auto;
        min-height: 75vh;
        margin: 0 auto;
        @media ${device.laptop} {
        }
        * {
            color: white;
        }
    }
`;
const StyledSection = styled.article`
    &&& {
        max-width: ${variables.pageWidth};
    }
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
`;
const StyledPad = styled.div`
    margin: 1rem;
`;

const StyledGraph = styled.div`
    width: auto;
    max-width: ${variables.pageWidth};
    margin: 0 auto;
    h2 {
        color: ${colors.main};
    }
`;

const OnlineMeetingFormContainer = ({ pathContext }) => {
    return (
        <Layout locale={pathContext.locale}>
            <SEO title="Platform of Trust Online Meeting form" />
            <StyledPage>
                <StyledPad>
                    <StyledSection>
                        <StyledGraph>
                            <OnlineMeetingForm />
                        </StyledGraph>
                    </StyledSection>
                </StyledPad>
            </StyledPage>
        </Layout>
    );
};

export default OnlineMeetingFormContainer;
