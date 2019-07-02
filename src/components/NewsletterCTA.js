import React from 'react'
import styled from 'styled-components'

import CustomButton from './CustomButton'
import { colors, device } from '../Theme.js'

const StyledNewsletterCTA = styled.article`
flex: 1;
display: flex;
flex-direction: column;
height: 300px;
margin: 0 0.5rem 1rem;
background-color: ${ colors.mainDarker };
* { color: white; }
@media ${device.tablet} {
  flex-basis: 45%;
}
@media ${device.laptop} {
  flex-basis: 23%;
  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }
}

header {
  flex: 1;
  padding: 1rem 1rem 0;
  margin: 0;
  text-align: left;
  background-color: ${ colors.mainDarkest };
  box-shadow: 0 3px 3px ${ colors.mainDarkest };
  h1 { 
    font-size: 2rem; 
    margin: 0 0.4em;
    color: white;
  }
}

main {
  flex: 2;
  display: flex;
  position: relative;
  padding: 1rem;
  p {
    font-size: 1rem; 
  }
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

const NewsletterCTA = (props) => {
  return (
    <StyledNewsletterCTA color={props.color} viz={props.viz} > 
      <header>
        <h1>Signup for news</h1>
      </header>
      <main>
        <p>Want to stay in touch with us? Please subscribe to our newletter!</p>
      </main>
      <footer>
        <CustomButton label="Send" />
      </footer>
    </StyledNewsletterCTA>
)}

export default NewsletterCTA