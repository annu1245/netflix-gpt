import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { movieCategories } from "../utils/constants";
import WatchNextMovieCard from "./WatchNextMovieCard";
import getVideoKey from "../utils/getVideoKey";
import { useNavigate } from "react-router";

const WatchNext = ({ categoryName }) => {
    const movies = useSelector((state) => state.movies);

    const recomendedMovies = movies ? (movies[categoryName] ? movies[categoryName] : movies[movieCategories[0].reduxTitle]) : movies[movieCategories[0].reduxTitle];
    
    const [watchNextMovies, setWatchNextMovies] = useState([]);

    useEffect(() => {
        setWatchNextMovies(recomendedMovies);
    }, [recomendedMovies]);

    const navigate = useNavigate();

    const handleClick = async (movieId) => {
        const videoKey = await getVideoKey(movieId);
        navigate(`/watch?v=${videoKey}`, {
            state: { categoryName, movieId },
        });
    };

   return  watchNextMovies && (
        <div className="border border-black mr-5 h-auto p-2">
           {
            watchNextMovies.map(movie => 
            <WatchNextMovieCard 
                key={movie.id} 
                movieId={movie.id} 
                posterPath={movie.poster_path} 
                title={movie.original_title} 
                views={movie.vote_count} 
                releseDate={movie.release_date}
                onClick={() => handleClick(movie.id)}
            />)
           }
        </div>
    );
};

export default WatchNext;
