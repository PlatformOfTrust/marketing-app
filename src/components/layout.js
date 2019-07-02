import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css';
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import Helmet from 'react-helmet'
import CookieConsent from "react-cookie-consent";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHexagon, faEllipsisV } from '@fortawesome/pro-solid-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Header from './Header'
import Footer from './Footer'
import BgImage from '../images/bg-image.svg'
// import '../scss/bootstrap.scss'
// import './Layout.css'

import { colors } from '../Theme.js'

library.add( fal, fab, faHexagon, faEllipsisV )
// icon({prefix: 'fal', iconName: 'draftingCompass'})

const GlobalStyle = createGlobalStyle`
  /* OVERRIDES */
  &&& { a { color: ${colors.light}; }}
`
;

const StyledSite = styled.section`
  background-color: #a897fe;
  background-image: url("${BgImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #f0f0f0;
`

const StyledWrapper = styled.section`
  margin: '0 auto';
  padding-top: 0,
`

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
        <Helmet title={data.site.siteMetadata.title}>

        </Helmet>
        
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledWrapper>
          {children}
        </StyledWrapper>
        <Footer />
        <CookieConsent>
    This website uses cookies to enhance the user experience.
</CookieConsent>
      </StyledSite>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
