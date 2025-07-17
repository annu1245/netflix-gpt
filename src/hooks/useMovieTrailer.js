import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../store/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
      const json = await data.json();

      const filterMovie = json.results.find((movie) => movie.type == "Trailer");
      const trailer = filterMovie.length ? filterMovie : json.results[0];
      dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
      getMovieVideo();
  }, []);

}
export default useMovieTrailer;