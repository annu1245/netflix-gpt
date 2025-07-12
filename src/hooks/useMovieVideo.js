import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addWatchNowMovie } from "../utils/moviesSlice";

const useMovieVideo = (movieId, shouldFetch) => {

  const dispatch = useDispatch();

  const getMovieVideo = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
      const json = await data.json();

      const filterMovie = json.results.find((movie) => movie.type == "Trailer");
      const trailer = filterMovie.length ? filterMovie : json.results[0];
      dispatch(addWatchNowMovie(trailer))
  };

  useEffect(() => {
    if(shouldFetch) {
      getMovieVideo();
    }
  }, [movieId, shouldFetch]);
}
export default useMovieVideo;