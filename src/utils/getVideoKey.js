import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addWatchNowMovie } from "./moviesSlice";

const getVideoKey = (movieId) => {
  // const dispatch = useDispatch();
  
  const getKey = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
    const json = await data.json();

    const filterMovie = json.results.find((movie) => movie.type == "Trailer");
    const trailer = filterMovie.length ? filterMovie : json.results[0];
    // dispatch(addWatchNowMovie(trailer));
    return trailer.key;
};
return getKey();
}

export default getVideoKey


