import { useEffect, useState } from "react";
import CalculateDate from "../utils/calculateDate";
import { TMDB_IMAGE_PATH } from "../utils/constants";
import useMovieVideo from "../hooks/useMovieVideo";
import { useDispatch } from "react-redux";

const WatchNextMovieCard = ({ movieId, posterPath, title, views, releseDate, onClick }) => {
    return (
        <div className="w-full border border-black my-2 rounded-lg flex gap-2 bg-gray-200 cursor-pointer" onClick={onClick}>
            <div className="w-20 h-20 overflow-hidden">
                <img className="rounded-lg w-full h-full object-cover" src={TMDB_IMAGE_PATH + posterPath} alt="poster" />
            </div>
            <div>
                <p className="font-bold">{title}</p>
                <p>{views} views</p>
                <p>
                    <CalculateDate date={releseDate} />
                </p>
            </div>
        </div>
    );
};

export default WatchNextMovieCard;
