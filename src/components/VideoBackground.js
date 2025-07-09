import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId)

  const trailerVideo = useSelector(store => store.movies?.trailerVideo)

  if (!trailerVideo) return;
  return (
      <div>
          <iframe 
            className="w-screen aspect-video" 
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}&si=ODjAw5Dyv51AJIZ_`} title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" >
          </iframe>
      </div>
  );
};

export default VideoBackground;
