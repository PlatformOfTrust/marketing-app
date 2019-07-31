import React from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';
import FooterInfo from './FooterInfo';
import Logo from '../images/platformoftrust-wide-white-rgb.svg';
import LogoSymbol from '../images/logo-symbol.svg';
import SomeIcons from './SomeIcons';
import { colors, device, variables } from '../Theme.js';

import SpanElement from './../components/SpanElement';

import { injectIntl } from 'react-intl';

const StyledFooter = styled.footer`
    &&& {
        max-width: 1550px;
    }
    width: auto;
    margin: 1rem auto 0 auto;
    padding: 1rem 0;
    background: ${colors.mainDarker};
    .row {
        max-width: ${variables.pageWidth};
        margin: 0 auto;
    }
    clip-path: url('#footerPathSVG');
    .clippath-svg {
        position: absolute;
    }
    .logo-footer {
        img {
            width: 100%;
        }
    }
    .logo-mobile {
        display: block;
        width: 100%;
    }
    .logo-mobile {
        @media ${device.laptop} {
            display: none;
        }
    }
    .logo-desk {
        display: none;
    }
    .logo-desk {
        @media ${device.laptop} {
            display: block;
            margin: 0;
            width: 100%;
        }
    }
    a:link {
        color: ${colors.light};
    }
    a:visited {
        color: ${colors.lightUsed};
    }
    .sitemap a:link {
        text-decoration: none;
    }
    .sitemap {
        display: none;

        &.right-side {
            margin-left: 1.2rem;
        }
    }
    .sitemap {
        @media ${device.laptop} {
            display: block;
        }
    }
    .keep-together {
        white-space: nowrap;
    }
    .footer-contact {
        color: ${colors.light};
        text-align: left;
        line-height: 1;
        font-size: calc(0.5rem + ((1vw - 0.2rem) * 4.4444));
        @media (min-width: 31.25rem) {
            font-size: 1rem;
        }
        h5 {
            color: ${colors.light};
            font-size: calc(0.5rem + ((1vw - 0.2rem) * 4.4444));
            @media (min-width: 31.25rem) {
                font-size: 1rem;
            }
        }
        p {
            font-size: 1rem;
        }
        a {
            font-weight: 400;
        }
    }
    .some-links {
        flex-wrap: wrap;
        width: 100px;
        margin-top: 20px;

        @media ${device.laptop} {
            flex-wrap: wrap;
            width: 140px;
            margin-top: 10px;
        }
    }
    .footer-elements-opacity {
        opacity: 0.8;
    }
    .data-flow-tag {
        top: 70px;
        left: 145px;
    }

    .pointer {
        cursor: pointer;
    }
`;

const Footer = ({ intl }) => {
    return (
        <StyledFooter className="page-footer footer">
            <svg className="clippath-svg" width="0" height="0">
                <clipPath id="footerPathSVG" clipPathUnits="objectBoundingBox">
                    <polygon points="0, 1, 0.1, 0, 0.90, 0, 1, 1" />
                </clipPath>
            </svg>

            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="footer-logo col-2 offset-1 ">
                        <LocalizedLink to="/">
                            <img
                                src={Logo}
                                className="logo-footer logo-desk footer-elements-opacity"
                                alt="Logo"
                            />
                        </LocalizedLink>
                        <LocalizedLink to="/">
                            <img
                                src={LogoSymbol}
                                className="logo-footer logo-mobile footer-elements-opacity"
                                alt="Logo"
                            />
                        </LocalizedLink>
                    </div>

                    <div className="footer-contact col-4 col-lg-4 col-xl-4 mt-md-0 mt-1">
                        <FooterInfo />
                        {/* <h5 className="mb-md-1">Platform of Trust</h5>
          <p>VAT-number FI29800052</p> */}
                        {/* <p><a href="https://www.tilaajavastuu.fi/en/data-protection/">Data protection statement</a></p>*/}
                    </div>

                    <div className="sitemap">
                        {/* <Link to="/pricing">Pricing</Link><br /> */}
                        <LocalizedLink
                            to="/cases"
                            className="footer-elements-opacity"
                        >
                            <SpanElement text="cases" />
                        </LocalizedLink>
                        <br />
                        <LocalizedLink
                            to="/news"
                            className="footer-elements-opacity"
                        >
                            <SpanElement text="news" />
                        </LocalizedLink>
                        <br />
                    </div>

                    <div className="sitemap right-side">
                        <LocalizedLink
                            to="/events"
                            className="footer-elements-opacity"
                        >
                            <SpanElement text="events" />
                        </LocalizedLink>
                        <br />
                        <LocalizedLink
                            to="/about"
                            className="footer-elements-opacity"
                        >
                            <SpanElement text="about" />
                        </LocalizedLink>
                        <br />
                        <LocalizedLink
                            to="/contact"
                            className="footer-elements-opacity"
                        >
                            <SpanElement text="contact" />
                        </LocalizedLink>
                        <br />
                        <SpanElement
                            className="footer-elements-opacity pointer"
                            onClick={() => {
                                /* TODO: This part can be improved */
                                if (intl.locale === 'en') {
                                    window.location.pathname = window.location.pathname.replace(
                                        '/en',
                                        '/fi'
                                    );
                                } else if (intl.locale === 'fi') {
                                    window.location.pathname = window.location.pathname.replace(
                                        '/fi',
                                        '/en'
                                    );
                                }
                            }}
                            text="changeLanguageText"
                        />
                        <br />
                    </div>

                    {/* <div className="sitemap col-md-1">
          <Link to="/faq">FAQ</Link><br />
          <Link to="/logos">Logos</Link><br />
        </div> */}

                    {/* <div className="sitemap col-md-1">
          <Link to="/">Login</Link><br />
        </div> */}

                    <div className="footer-somelinks col-4 col-lg-2 col-xl-2 text-right">
                        <SomeIcons
                            className="footer-someicons"
                            color="lightUsed"
                        />

                        <span className="data-flow-tag">#dataflows</span>
                        {/* <nav className="some-links">
            <span className="keep-together">
              <a href="https://www.facebook.com/platformoftrust" className="some-link facebook"><img src={Facebook} className="some-icon" alt="Facebook" /></a>
              <a href="https://twitter.com/PlatformOfTrust" className="some-link twitter"><img src={Twitter} className="some-icon" alt="Twitter" /></a>
            </span>
            <br className="d-md-none" />
            <span className="keep-together">
              <a href="https://www.linkedin.com/company/platform-of-trust/" className="some-link github"><img src={Linkedin} className="some-icon" alt="Github" /></a>
              <a href="https://github.com/PlatformOfTrust/" className="some-link linkedin"><img src={Github} className="some-icon" alt="Linkedin" /></a>
            </span>
            <span className="keep-together">
              <a href="https://www.youtube.com/channel/UCSHXKYHxBCl_hXdBZU_A-gg" className="some-link youtube"><img src={Linkedin} className="some-icon" alt="Youtube" /></a>
            </span>
          </nav> */}
                    </div>

                    {/* <nav className="sitemap col-md-2 mb-md-0 mb-3">

          <h5 className="text-uppercase">Pages</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link" to="/pricing">Pricing plans</Link>
            </li>
            <li>
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li>
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li>
              <Link className="nav-link" to="/Team">Team</Link>
            </li>
          </ul>
        </nav>

        <nav className="sitemap col-md-2 mb-md-0 mb-3">
          <h5 className="text-uppercase">Services</h5>
          <ul className="list-unstyled">
            <li>
              <a className="nav-link" href="http://preview.oftrust.net">Platform of Trust</a>
            </li>
            <li>
              <a className="nav-link" href="http://market.oftrust.net/">Market place</a>
            </li>
            <li>
              <a className="nav-link" href="http://world.oftrust.net/">My World</a>
            </li>
            <li>
              <a className="nav-link" href="http://developer.oftrust.net/">Developer portal</a>
            </li>
          </ul>
        </nav> */}
                </div>
            </div>
        </StyledFooter>
    );
};

export default injectIntl(Footer);
