import React from 'react'
import { useSelector } from 'react-redux'

const VideoIframe = ({videoKey}) => {
  return (
    <div>
      <iframe width="800" height="400" src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
  )
}

export default VideoIframe


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/lyivgZ074PY?si=cFVvNY4VpHYocqq_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}