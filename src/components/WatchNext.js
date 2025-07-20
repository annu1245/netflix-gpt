import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS, movieCategories } from "../utils/constants";
import WatchNextMovieCard from "./WatchNextMovieCard";
import getVideoKey from "../utils/getVideoKey";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';

const WatchNext = ({ categoryName, movieId }) => {

    const [watchNextMovies, setWatchNextMovies] = useState([]);

    const getMovieRecommendations = async (movieId) => {
        const url = "https://api.themoviedb.org/3/movie/" + movieId + "/recommendations?language=en-US&page=1";
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        // TODO: handle case where no movies found
        setWatchNextMovies(json.results)
    };

    useEffect(() => {
        async function fetchData() {
            await getMovieRecommendations(movieId);
        }
        fetchData();
       
    }, [movieId]);



   
    const navigate = useNavigate();

    const handleClick = async (movieId) => {
        const videoKey = await getVideoKey(movieId);
        if (!videoKey) {
            toast.error("Video information not found!");
            return;
        }
        navigate(`/watch/${videoKey}`, {
            state: { categoryName, movieId },
        });
    };

    return (
        watchNextMovies && (
            <div className="border border-black mr-5 h-auto p-2">
                {watchNextMovies.map((movie) => (
                    <WatchNextMovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} title={movie.original_title} views={movie.vote_count} releseDate={movie.release_date} onClick={() => handleClick(movie.id)} />
                ))}
            </div>
        )
    );
};

export default WatchNext;
