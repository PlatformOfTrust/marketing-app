import React from 'react'
import styled from 'styled-components'

import Cozify from './Cozify.png'
import Dl from './digitalliving.png'
import Flextila from './Flextila.png'
import Forumvirium from './Forum-virium.png'
import Granlund from './Granlund.png'
import Gsp from './GSP.png'
import Hamk from './Hamk.png'
import Kojamo from './Kojamo.png'
import Knowurbiz from './KnowUr-biz.png'
import Knx from './Knx.jpg'
import Lahitapiola from './lahitapiola.png'
import Locia from './locia.png'
import Metropolia from './Metropolia.png'
import Honkio from './Honkio.png'
import Senaatti from './Senaatti.png'
import Sportvenue from './Sport-Venue-logo-white_bg-small.jpg'
import Syk from './Syk.png'
import Tampereentilapalvelut from './Tampereentilapalvelut.png'
import Tieto from './Tieto.png'
import Tunninen from './Tunninen.png'
import Varma from './Varma.png'
import Vtt from './VTT.png'

const StyledLogos = styled.div`
  display: flex;
  background: white;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  a {
    flex: 1;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    margin: 1rem;
  }
  img {
    flex: 1;
    max-width: 250px;
    // border: 1px solid black;
  }
`

const Logos = props => {
  return (
    <StyledLogos>
      <a href="https://kojamo.fi/" target="_blank" rel="noopener noreferrer">
        <img src={Kojamo} alt="Kojamo" />
      </a>
      <a href="https://www.varma.fi/" target="_blank" rel="noopener noreferrer">
        <img src={Varma} alt="Varma" />
      </a>
      <a
        href="https://www.lahitapiola.fi/henkilo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Lahitapiola} alt="Lähitapiola" />
      </a>
      <a
        href="https://tampereentilapalvelut.fi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Tampereentilapalvelut} alt="Tampereen tilapalvelut" />
      </a>
      <a href="http://www.gsp.fi/" target="_blank" rel="noopener noreferrer">
        <img src={Gsp} alt="GSP" />
      </a>
      <a href="https://www.hamk.fi/" target="_blank" rel="noopener noreferrer">
        <img src={Hamk} alt="HAMK" />
      </a>
      <a
        href="https://forumvirium.fi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Forumvirium} alt="ForumVirium" />
      </a>
      <a href="https://honkio.com/" target="_blank" rel="noopener noreferrer">
        <img src={Honkio} alt="Honkio" />
      </a>
      <a
        href="https://www.cozify.fi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Cozify} alt="cozify" />
      </a>
      <a href="https://flextila.com/" target="_blank" rel="noopener noreferrer">
        <img src={Flextila} alt="Flextila" />
      </a>
      <a
        href="https://www.metropolia.fi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Metropolia} alt="Metropolia" />
      </a>
      <a
        href="https://www.senaatti.fi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Senaatti} alt="Senaatti" />
      </a>
      <a href="https://sykoy.fi/" target="_blank" rel="noopener noreferrer">
        <img src={Syk} alt="SYK" />
      </a>
      <a
        href="https://empathicbuilding.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Tieto} alt="Tieto" />
      </a>
      <a
        href="https://www.granlund.fi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Granlund} alt="Grandlund" />
      </a>
      <a
        href="https://digitalliving.fi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Dl} alt="Digital Living" />
      </a>
      <a
        href="https://www.tunninen.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Tunninen} alt="Tunninen" />
      </a>
      <a href="https://www.vtt.fi/" target="_blank" rel="noopener noreferrer">
        <img src={Vtt} alt="VTT" />
      </a>
      <a href="http://www.knx.fi/" target="_blank" rel="noopener noreferrer">
        <img src={Knx} alt="KNX" />
      </a>
      <a href="http://www.locia.fi/" target="_blank" rel="noopener noreferrer">
        <img src={Locia} alt="Locia" />
      </a>
      <a
        href="http://www.sportvenue.fi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Sportvenue} alt="Sport Venue" />
      </a>
      <a
        href="http://www.sportvenue.fi/fi/analytics/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Knowurbiz} alt="KnowUr.biz" />
      </a>
    </StyledLogos>
  )
}

export default Logos
