import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { colors } from '../Theme.js'
// import CustomImage from "../components/CustomImage"
import HexImage from './HexImage'

export const componentColors = {
  freemium: `${colors.mainDark}`,
  transaction: `${colors.ok}`,
  standard: `${colors.success}`,
  premium: `${colors.notice}`,
}

const StyledContactBlurb = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  h2 {
    display: block;
    font-size: 1.6rem;
    font-weight: 900;
    min-heigth: 2em;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 0.2em;
  }
  span {
    margin-right: 0.2em;
  }
`
const StyledName = styled.h2`
  display: block;
  font-size: 1.6rem;
  font-weight: 900;
`
const StyledCustomImage = styled.div`
  width: 85%;
  max-width: 250px;
  margin-bottom: 2rem;
  transform: translateX(-1rem) rotate(10deg) scale(1);
  // clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  .gatsby-image-wrapper {
    transform: rotate(-10deg);
  }
`

const ContactBlurb = props => {
  const phone = props.phone
  const formattedPhone = `${phone.substring(0, 4)} ${phone.substring(
    4,
    6
  )} ${phone.substring(6, 9)} ${phone.substring(9, 13)} ${phone.substring(
    13,
    16
  )}`

  return (
    <StyledContactBlurb className="col-12 col-md-6 col-lg-3">
      <StyledCustomImage>
        {/* <CustomImage filename={props.pic} alt={props.name} /> */}
        <HexImage
          pic={require(`./../images/${props.pic}`)}
          hexId={`ContactHex-${props.email}-${props.phone}`}
          rotate={true}
        />
      </StyledCustomImage>

      <div>
        <StyledName>{props.name}</StyledName>
        <p>{props.title}</p>
        <p>
          <a href={`tel:${props.phone}`}>{formattedPhone}</a>
        </p>
        <p>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </p>
        <p>
          {props.linkedin && (
            <span>
              <a
                href={`${props.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  color="white"
                  size="1x"
                />
              </a>
            </span>
          )}
          {props.twitter && (
            <span>
              <a
                href={`${props.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={['fab', 'twitter-square']}
                  color="white"
                  size="1x"
                />
              </a>
            </span>
          )}
        </p>
      </div>
    </StyledContactBlurb>
  )
}

export default ContactBlurb
