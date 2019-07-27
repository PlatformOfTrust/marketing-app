import React from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';
import HexBlurb from './HexBlurb';
import CustomRoundedButton from './CustomRoundedButton';

import { variables, colors, device } from '../Theme.js';

const ToolsSection = styled.div`
    &&& {
        max-width: ${variables.pageWidth};
    }
    width: 100%;

    // I don't thing we should drop the button, but...
    @media ${device.tablet} {
        .button-col {
            transform: translateY(2.5rem);
        }
    }

    @media ${device.laptop} {
        .row:nth-of-type(2) {
            transform: translateY(25%);
        }
        .row:nth-of-type(3) {
            transform: translateX(-1.5%);
        }
        .row:nth-of-type(4) {
            transform: translate(-3%, -25%);
        }
        h3 {
            margin-bottom: 0.2rem;
        }
        p {
            font-size: 0.875rem;
        }
    }
    @media ${device.laptopM} {
        .row:nth-of-type(2) {
            transform: translateY(25%);
        }
        .row:nth-of-type(3) {
            transform: translateX(-1%);
        }
        .row:nth-of-type(4) {
            transform: translate(-2%, -25%);
        }
        h3 {
            margin-bottom: 0.4rem;
        }
        p {
            font-size: 1rem;
        }
    }

    .disabled a:link {
        cursor: not-allowed !important;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        .hexBlurbWrapper {
            max-height: 26vw;
        }
    }
`;

const ToolsIntro = props => {
    return (
        <ToolsSection className="container" bgColor={props.bgColor}>
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 mb-5 mb-lg-0">
                    <h2>Here are the tools we offer</h2>
                </div>
            </div>

            <div className="row mb-5 mb-md-3 mb-lg-0">
                <div className="hex-col col-8 col-sm-6 col-md-3 col-lg-2 offset-md-1 hexBlurbWrapper">
                    <HexBlurb
                        title="Developer portal"
                        icon="terminal"
                        textColor="white"
                        bgColor="dark"
                    />
                </div>
                <div className="col-md-4 col-lg-4">
                    <h3>Hack data</h3>
                    <p>
                        Our developer portal has all the tools and data you need
                        in order to create new solutions and services. This
                        portal has been built from the point of view of a
                        developer in order to create the best possible DX.
                    </p>
                </div>
                <div className="button-col col-md-3 col-lg-2">
                    <a href="https://developers.oftrust.net">
                        <CustomRoundedButton label="Join the party" />
                    </a>
                </div>
            </div>

            <div className="row mb-5 mb-md-3 mb-lg-0">
                <div className="hex-col col-8 col-sm-6 col-md-3 col-lg-2 offset-lg-2 offset-md-1 hexBlurbWrapper">
                    <HexBlurb
                        title="MyWorld"
                        icon="globe-stand"
                        textColor="white"
                        bgColor="mainDark"
                    />
                </div>
                <div className="col-md-4 col-lg-4">
                    <h3>Rule data</h3>
                    <p>
                        My world is a visualisation tool where you can manage
                        your data in a digital twin, see where it comes from and
                        where it links to.
                    </p>
                </div>
                <div className="disabled button-col col-md-3 col-lg-2 ">
                    <LocalizedLink to="/">
                        <CustomRoundedButton
                            label="Coming soon"
                            primary
                            disabled
                        />
                    </LocalizedLink>
                </div>
            </div>

            <div className="row mb-5 mb-md-3 mb-lg-0">
                <div className="hex-col col-8 col-sm-6 col-md-3 col-lg-2 offset-lg-3 offset-md-1 hexBlurbWrapper">
                    <HexBlurb
                        title="Market place"
                        icon="shopping-bag"
                        textColor={colors.main}
                        bgColor="light"
                    />
                </div>
                <div className="col-md-4 col-lg-4">
                    <h3>Sell &amp; Buy</h3>
                    <p>
                        Make your data earn. We are creating a marketplace for
                        data products and applications where you can offer your
                        data for others to utilise or a ready-made service or
                        application for others to buy. You define the pricing,
                        we take care of contracts and licensing. Automatically.
                    </p>
                </div>
                <div className="disabled button-col col-md-3 col-lg-2">
                    <LocalizedLink to="/">
                        <CustomRoundedButton
                            label="Future feature"
                            primary
                            disabled
                            className="disabled"
                        />
                    </LocalizedLink>
                </div>
            </div>
        </ToolsSection>
    );
};

export default ToolsIntro;
