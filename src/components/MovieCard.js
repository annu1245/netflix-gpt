import React from 'react'
import { TMDB_IMAGE_PATH } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36'>
      <img src={TMDB_IMAGE_PATH + posterPath}/>
    </div>
  )
}

export default MovieCard