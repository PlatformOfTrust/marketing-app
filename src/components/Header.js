import React from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';
import MobileMenu from './MobileMenu';
import DeskMenu from './DeskMenu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors, device, variables } from '../Theme.js';
import Logo from '../images/platformoftrust-wide-white-rgb.svg';

const StyledHeader = styled.header`
    width: auto;
    max-width: ${variables.pageWidthNarrow};
    margin: 0 auto;
`;

const StyledToggler = styled.div`
    position: fixed;
    display: block;
    box-sizing: content-box;
    // width: 2rem;
    top: 1.8rem;
    left: 0;
    transform: translateX(calc(100vw - 4.2rem)) rotate(0deg);
    padding: 0.5rem;
    margin: 0 0 0 auto;
    border: 16px solid transparent;
    background: transparent;
    transition: all 0.3s ease-out;
    z-index: 9000;
    &:hover {
        cursor: pointer;
    }
    &.open {
        top: -1rem;
        transform: translateX(calc(10vw + 0rem)) rotate(-90deg);
        background: transparent;
        svg {
            color: ${colors.mainDarker};
        }
        .hamburger {
            background: transparent;
            padding: 0.1rem;
        }
    }
    .hamburger {
        background: ${colors.main};
        text-align: center;
        padding: 1rem;
    }
    @media ${device.tablet} {
        display: none;
    }
`;
const StyledBranding = styled.div`
    display: inline-block;
    width: 20vw;
    vertical-align: middle;
    padding-left: 1rem;
    transform: translateY(1rem);
`;

export default class HeaderFoo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            right: false
        };
    }

    handleDrawer = open => event => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        this.setState(prevState => ({ right: !prevState.right }));
    };

    render() {
        const { right } = this.state;

        return (
            <StyledHeader>
                <SwipeableDrawer
                    open={this.state.right}
                    anchor="right"
                    onClose={this.handleDrawer(false)}
                    onOpen={this.handleDrawer(true)}
                >
                    <MobileMenu handleDrawer={this.handleDrawer} />
                </SwipeableDrawer>

                <header className="wrapper">
                    <StyledBranding className="XXXlogo">
                        <LocalizedLink className="XXXnavbar-brand" to="/">
                            <img
                                src={Logo}
                                className="header-logo"
                                alt="Logo"
                            />
                        </LocalizedLink>
                    </StyledBranding>
                    <StyledToggler
                        className={`${right ? 'open' : 'closed'}`}
                        onClick={this.handleDrawer(true)}
                    >
                        <div className="hamburger">
                            <FontAwesomeIcon
                                icon={['fas', 'ellipsis-v']}
                                size="2x"
                            />
                        </div>
                    </StyledToggler>
                    <DeskMenu />
                </header>
            </StyledHeader>
        );
    }
}
