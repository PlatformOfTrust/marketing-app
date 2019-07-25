import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import MetaTags from 'react-meta-tags';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHexagon, faEllipsisV } from '@fortawesome/pro-solid-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './Header';
import Footer from './Footer';
import BgImage from '../images/bg-image.svg';
import SocialPreviewImage from '../images/preview_social_share/home.jpg';
// import '../scss/bootstrap.scss'
// import './Layout.css'

import { colors } from '../Theme.js';

library.add(fal, fab, faHexagon, faEllipsisV);
// icon({prefix: 'fal', iconName: 'draftingCompass'})

const GlobalStyle = createGlobalStyle`
  /* OVERRIDES */
  &&& { a { color: ${colors.light}; }}
`;
const StyledSite = styled.section`
  background-color: #a897fe;
  background-image: url("${BgImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #f0f0f0;
`;

const StyledWrapper = styled.section`
    margin: '0 auto';
    padding-top: 0;
`;
const socialPreviewImageFullUri = window.location.origin + SocialPreviewImage;

const Layout = ({ pathname, children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        siteUrl
                    }
                }
            }
        `}
        render={data => (
            <StyledSite>
                <GlobalStyle />
                <Helmet title={data.site.siteMetadata.title} />
                <MetaTags>
                    <meta property="og:title" content={SocialPreviewData.title} />
                    <meta property="og:description" content={SocialPreviewData.description} />
                    <meta property="og:image" content={socialPreviewImageFullUri} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={SocialPreviewData.title} />
                    <meta name="twitter:description" content={SocialPreviewData.description} />
                    <meta name="twitter:image" content={socialPreviewImageFullUri} />
                </MetaTags>

                <Header siteTitle={data.site.siteMetadata.title} />
                <StyledWrapper>{children}</StyledWrapper>
                <Footer />
                <CookieConsent>
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
            </StyledSite>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

const SocialPreviewData = {
    title: 'Platform Of Trust | Home',
    description: 'Platform of Trust harmonizes incompatible data and makes it flow to enable automated business ecosystems and knowledge-based decision making.'
};

export default Layout;
