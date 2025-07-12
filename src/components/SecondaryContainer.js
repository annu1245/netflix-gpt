import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { movieCategories } from "../utils/constants";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    if (!movies.nowPlayingMovies || !movies.popularMovies || !movies.topRatedMovies) return;

    return (
        <div className="bg-black">
            <div className="-mt-56 relative">
                {
                    movieCategories.map(category =>  <MovieList title={category.categoryTitle} key={category.reduxTitle} movies={movies.nowPlayingMovies} categoryName={category.reduxTitle}/>)
                }
            </div>
        </div>
    );
};

export default SecondaryContainer;
