import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='p-4 pl-12'>
      <h1 className='mt-2 mb-4 text-2xl font-bold text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex gap-4'>
          {
            movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList