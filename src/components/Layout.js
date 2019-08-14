import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import CookieConsent from 'react-cookie-consent';

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

import favicon128 from '../images/favicon-128x128.png';

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

const Layout = ({ locale, children, metaImage }) => {
    let socialPreviewImage = SocialPreviewImage;
    if (typeof metaImage !== 'undefined') {
        socialPreviewImage = metaImage;
    }

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
                                    sizes: '128x128',
                                    href: `${favicon128}`
                                }
                            ]}
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
                                    property: 'og:image',
                                    content: `${data.site.siteMetadata.siteUrl}${socialPreviewImage}`
                                },
                                {
                                    property: 'og:type',
                                    content: 'website'
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
                                },
                                {
                                    property: 'twitter:image',
                                    content: `${data.site.siteMetadata.siteUrl}${socialPreviewImage}`
                                }
                            ]}
                        />
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
    title: 'Platform Of Trust',
    description:
        'Platform of Trust harmonizes incompatible data and makes it flow to enable automated business ecosystems and knowledge-based decision making.'
};

export default Layout;
