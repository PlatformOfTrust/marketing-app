import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { colors, device, variables } from '../Theme.js'

const StyledPage = styled.div`
  &&& { max-width: ${ variables.pageWidth } 
  width: auto;
  min-height: 75vh;
  margin: 0 auto;
  @media ${ device.laptop } {
  }
  * { color: white }
`
const StyledSection = styled.article`
  &&& { max-width: ${ variables.pageWidth } }
  margin: 5rem auto;
  padding: 10%;
  background: ${ colors.mainDarker }
`
const StyledPad = styled.div`
  margin: 1rem;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Platform of Trust 404: Not found" />
    <StyledPage>
      <StyledPad>
        <StyledSection>
          <h1>Hmm... this was not supposed to happen. We are a data linking platform and for some reason, the data is going full 404 on you right now.</h1>
          <p>If you found this link on the internet (and didn't just type it wrong) we would very much appreciate if you'd report it to us. <a href="mailto:email@oftrust.net">email@oftrust.net</a> Thanks!</p> 
          
          <p>You can also go to the <a href="https://www.platformoftrust.net/">front page</a> to find what you were looking for. 
          </p>
        </StyledSection>
      </StyledPad>
    </StyledPage>
  </Layout>
)

export default NotFoundPage
