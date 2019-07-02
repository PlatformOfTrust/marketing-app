import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors, device } from '../Theme.js';
import Check from '../images/check-circle.svg';
import CustomButton from './CustomButton';

export const componentColors = {
    freemium: `${colors.ok}`,
    transaction: `${colors.success}`,
    standard: `${colors.notice}`,
    premium: `${colors.mainDark}`
};

const StyledCard = styled.article`
    flex: 1;
    margin: 0 0.5rem 1rem;
    background: white;
    @media ${device.laptop} {
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    header {
        box-sizing: border-box;
        padding: 1rem;
        margin: 0;
        background: ${props => componentColors[props.color]};
        * {
            color: white;
        }
        h1 {
            font-size: 1.6rem;
            margin: 0.5em 0 0;
            color: white;
        }
        button {
            float: right;
        }
    }

    main {
        position: relative;
        padding: 1rem;
        * {
            font-size: 1rem;
        }
        ul {
            list-style: none;
        }
        li {
            position: relative;
            font-weight: 500;
            color: ${colors.main};
            &:before {
                content: url(${Check});
                position: absolute;
                display: block;
                width: 1em;
                left: -1.5em;
            }
        }
        p,
        strong {
            color: ${colors.main};
        }
    }
`;

const pricingCard = props => {
    return (
        <StyledCard color={props.color}>
            <header>
                <FontAwesomeIcon icon={['fal', `${props.icon}`]} size="3x" />
                {/* <CustomButton label="Get Started!" /> */}
                <h1>
                    {props.name}:<br />
                    {props.price}
                </h1>
            </header>
            <main>
                <div
                    className="card-text content-fragment"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </main>
        </StyledCard>
    );
};

export default pricingCard;
