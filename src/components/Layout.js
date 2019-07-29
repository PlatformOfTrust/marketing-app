import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import MetaTags from 'react-meta-tags';

import { IntlProvider, addLocaleData } from 'react-intl';

// Locale data
import enData from 'react-intl/locale-data/en';
import fiData from 'react-intl/locale-data/fi';

// Messages
import en from './../locales/en/UI.json';
import fi from './../locales/fi/UI.json';

const messages = { en, fi };

addLocaleData([...enData, ...fiData]);

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHexagon, faEllipsisV } from '@fortawesome/pro-solid-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './Header';
import Footer from './Footer';
import BgImage from '../images/bg-image.svg';
import SocialPreviewImage from '../images/preview_social_share/home.jpg';

import { colors } from '../Theme.js';

library.add(fal, fab, faHexagon, faEllipsisV);

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

const Layout = ({ locale, children }) => {
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
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
                        <Helmet
                            title={data.site.siteMetadata.title}
                            link={[
                                {
                                    rel: 'icon',
                                    type: 'image/png',
                                    sizes: '16x16',
                                    href: `${favicon16}`
                                },
                                {
                                    rel: 'icon',
                                    type: 'image/png',
                                    sizes: '32x32',
                                    href: `${favicon32}`
                                },
                                {
                                    rel: 'icon',
                                    type: 'image/png',
                                    sizes: '96x96',
                                    href: `${favicon96}`
                                },
                                {
                                    rel: 'icon',
                                    type: 'image/png',
                                    sizes: '128x128',
                                    href: `${favicon128}`
                                },
                                {
                                    rel: 'shortcut icon',
                                    type: 'image/png',
                                    sizes: '196x196',
                                    href: `${favicon196}`
                                },

                                {
                                    rel: 'apple-touch-icon-precomposed',
                                    type: 'image/png',
                                    sizes: '57x57',
                                    href: `${appleTouch57}`
                                },
                                {
                                    rel: 'apple-touch-icon-precomposed',
                                    type: 'image/png',
                                    sizes: '60x60',
                                    href: `${appleTouch60}`
                                },
                                {
                                    rel: 'apple-touch-icon-precomposed',
                                    type: 'image/png',
                                    sizes: '72x72',
                                    href: `${appleTouch72}`
                                },
                                {
                                    rel: 'apple-touch-icon-precomposed',
                                    type: 'image/png',
                                    sizes: '76x76',
                                    href: `${appleTouch76}`
                                },
                                {
                                    rel: 'apple-touch-icon-precomposed',
                                    type: 'image/png',
                                    sizes: '114x114',
                                    href: `${appleTouch114}`
                                },
                                {
                                    rel: 'apple-touch-icon-precomposed',
                                    type: 'image/png',
                                    sizes: '120x120',
                                    href: `${appleTouch120}`
                                },
                                {
                                    rel: 'apple-touch-icon-precomposed',
                                    type: 'image/png',
                                    sizes: '144x144',
                                    href: `${appleTouch144}`
                                },
                                {
                                    rel: 'apple-touch-icon-precomposed',
                                    type: 'image/png',
                                    sizes: '152x152',
                                    href: `${appleTouch152}`
                                }
                            ]}
                        />
                        <MetaTags>
                            <meta
                                property="og:title"
                                content={SocialPreviewData.title}
                            />
                            <meta
                                property="og:description"
                                content={SocialPreviewData.description}
                            />
                            <meta
                                property="og:image"
                                content={socialPreviewImageFullUri}
                            />
                            <meta
                                name="twitter:card"
                                content="summary_large_image"
                            />
                            <meta
                                name="twitter:title"
                                content={SocialPreviewData.title}
                            />
                            <meta
                                name="twitter:description"
                                content={SocialPreviewData.description}
                            />
                            <meta
                                name="twitter:image"
                                content={socialPreviewImageFullUri}
                            />
                        </MetaTags>

                        <Header siteTitle={data.site.siteMetadata.title} />
                        <StyledWrapper>{children}</StyledWrapper>
                        <Footer />
                        <CookieConsent>
                            This website uses cookies to enhance the user
                            experience.
                        </CookieConsent>
                    </StyledSite>
                )}
            />
        </IntlProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

const SocialPreviewData = {
    title: 'Platform Of Trust | Home',
    description:
        'Platform of Trust harmonizes incompatible data and makes it flow to enable automated business ecosystems and knowledge-based decision making.'
};

export default Layout;
