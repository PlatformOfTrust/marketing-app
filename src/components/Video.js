import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <StyledVideo>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      // width="1280"
      // height="720"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledVideo>
)

export default Video
