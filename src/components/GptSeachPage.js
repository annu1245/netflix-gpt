import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetion from "./GptMovieSuggetion";
import { NETFLIX_BG } from "../utils/constants";

const GptSeachPage = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={NETFLIX_BG} alt="bg-img" />
            </div>
            <GptSearchBar />
            <GptMovieSuggetion />
        </div>
    );
};

export default GptSeachPage;
