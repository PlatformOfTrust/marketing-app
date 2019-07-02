import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors, device } from '../Theme.js';
import Viz1 from '../images/viz1.jpg';
import Viz2 from '../images/viz2.jpg';
import Viz3 from '../images/viz3.jpg';
import Viz4 from '../images/viz4.jpg';

const StyledVizCard = styled.article`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 300px;
    margin: 0 0.5rem 1rem;
    background-color: ${colors.mainDarker};
    * {
        color: white;
    }
    @media ${device.tablet} {
        flex-basis: 45%;
    }
    @media ${device.laptop} {
        flex-basis: 23%;
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    header {
        flex: 1;
        padding: 1rem 1rem 0;
        margin: 0;
        text-align: right;
        h1 {
            font-size: 2rem;
            margin: 0 1.2em;
            color: white;
        }
        svg {
            float: right;
        }
    }

    main {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 1rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        span {
            color: ${colors.main};
            font-size: 2.5rem;
            letter-spacing: 0.18em;
        }
    }

    &:first-child main {
        background-image: url(${Viz1});
    }
    &:nth-child(2) main {
        background-image: url(${Viz2});
    }
    &:nth-child(3) main {
        background-image: url(${Viz3});
    }
    &:last-child main {
        background-image: url(${Viz4});
    }

    footer {
        flex: 1;
        width: 100%;
        background: transparent;
        h4 {
            margin: 0.6rem 1em 0.2rem auto;
            font-size: 1.5rem;
            text-align: right;
        }
    }
`;

const SavedViz = props => {
    return (
        <StyledVizCard color={props.color} viz={props.viz}>
            <header>
                <FontAwesomeIcon icon={['fal', `${props.icon}`]} size="2x" />
                <h1>{props.headerContent}</h1>
            </header>
            <main>
                <span>{props.middleContent}</span>
            </main>
            <footer>
                <h4>{props.footerContent}</h4>
            </footer>
        </StyledVizCard>
    );
};

export default SavedViz;
