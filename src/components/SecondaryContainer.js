import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    if (!movies.nowPlayingMovies || !movies.popularMovies || !movies.topRatedMovies) return;

    return (
        <div className="bg-black">
            <div className="-mt-56 relative">
                <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies} />
                <MovieList title="Popular Movies" movies={movies.popularMovies} />
                <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
