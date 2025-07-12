import React, {useState} from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router";
import getVideoKey from "../utils/getVideoKey";

const MovieList = ({ title, movies, categoryName }) => {

    const navigate = useNavigate();

    const handleClick = async (movieId) => {
        const videoKey = await getVideoKey(movieId);
        navigate(`/watch?v=${videoKey}`, {
            state: { categoryName, movieId },
        });
    };

    return (
        <div className="p-4 pl-12">
            <h1 className="mt-2 mb-4 text-2xl font-bold text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex gap-4">
                    {movies.map((movie) => (
                        <MovieCard 
                            key={movie.id} 
                            posterPath={movie.poster_path} 
                            onClick={() => handleClick(movie.id)} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
