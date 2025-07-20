import { TMDB_IMAGE_PATH } from '../utils/constants';

const MovieCard = ({posterPath, onClick}) => {
  if(!posterPath) return;
  return (
    <div className='w-36 cursor-pointer' onClick={onClick}>
      <img src={TMDB_IMAGE_PATH + posterPath}/>
    </div>
  )
}

export default MovieCard