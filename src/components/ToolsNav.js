import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { colors } from '../Theme.js'

const StyledToolsNav = styled.nav`
color: ${colors.mainDark};
text-align: right;
a {
  display: none; // Change when tools released
  font-weight: 300; 
  color: ${colors.mainDark}; 
}
a:visited { color: ${colors.mainDarker}; }
`

const ToolsNav = (props) => {
  return (
    <StyledToolsNav className="apps"> 
      <Link className="nav-link" to="/search">Search</Link>
      <Link className="nav-link" to="/faq">FAQ</Link>
      <Link className="nav-link" to="/language">En/Fi</Link>
      <Link className="nav-link" to="/login">Login</Link>
    </StyledToolsNav>
)}

export default ToolsNav