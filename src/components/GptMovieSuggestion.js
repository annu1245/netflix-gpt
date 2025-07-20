import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const gpt = useSelector((store) => store.gpt);
    if (!gpt.movieResults) {
        return;
    }
    const { movieNames, movieResults } = gpt;
    return (
        <div className="bg-black p-4 mt-[10%] bg-opacity-80 text-white">
            {movieResults.map((movie, index) => (
                <MovieList key={movieNames[index]} title={movieNames[index]} movies={movie} categoryName="searchResult" />
            ))}
        </div>
    );
};

export default GptMovieSuggestion;
