import React from 'react'
import styled from 'styled-components'

import FooterInfo from './FooterInfo'
import SomeIcons from './SomeIcons'
import Logo from "../images/platformoftrust-wide-white-rgb.svg"
import { colors } from '../Theme.js'

const StyledMenuFooter = styled.footer`
flex: 1;
display: flex;
max-width: 100%;
height: 100%;
background: ${colors.mainDarker};
img { margin-bottom: 2rem; }
h5 { font-size: 1rem; }
.footer-content { 
  flex: 2; 
  padding: 1rem;
}
.footer-some { 
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1rem 1rem 0;
  // min-width: calc(32px + 1rem);
  // max-width: calc(42px + 1rem);
}
`
const MenuFooter = () => (
  <StyledMenuFooter>
    <div className="footer-content">
      <img src={Logo} className="logo__footer" alt="Logo" />
      <FooterInfo />
    </div>
    <div className="footer-some">
      <SomeIcons vertical />
    </div>
  </StyledMenuFooter>
)

export default MenuFooter
