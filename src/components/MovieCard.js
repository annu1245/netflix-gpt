import { TMDB_IMAGE_PATH } from '../utils/constants';

const MovieCard = ({posterPath, onClick}) => {
  return (
    <div className='w-36' onClick={onClick}>
      <img src={TMDB_IMAGE_PATH + posterPath}/>
    </div>
  )
}

export default MovieCard