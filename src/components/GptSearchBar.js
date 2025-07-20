import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstant";
import openai from "../utils/openai";
import groqai from "../utils/groqai";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchMovies } from "../store/gptSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchBar = () => {
    const lang = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movieName) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movieName + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    };

    const handleGptSearch = async () => {
        const searchQuery = "Act as a movie recommendation system and suggest me some movie for the queries : " + searchText.current.value + "only give me name of 5 movies, comma seperated like the example result given ahead. Example Results: Gadar, Golmaal, Koi mil gaya, Don, Sholay";
        // const completion = await groqai.chat.completions.create({
        //     messages: [
        //         {
        //             role: "user",
        //             content: searchQuery,
        //         },
        //     ],
        //     model: "llama-3.3-70b-versatile",
        // });

        // if(!completion.choices) {
        //   console.log("Api Result Failed");
        //   return;
        // }

        // console.log(completion.choices[0]?.message?.content);
        //Golmaal, Jaane Bhi Do Yaaro, Chupke Chupke, Angoor, Andaz Apna Apna
        const dummyData = ["Golmaal", "Jaane Bhi Do Yaaro", "Chupke Chupke", "Angoor", "Andaz Apna Apna"];
        const searchResults = dummyData.map((movie) => searchMovieTMDB(movie));
        const gptMovies = await Promise.all(searchResults);
        dispatch(addGptSearchMovies({movieNames: dummyData, movieResults: gptMovies}));
    };
    return (
        <>
            <div className="pt-[10%] flex justify-center">
                <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                    <input ref={searchText} className="p-4 m-4 col-span-9" type="text" placeholder={language[lang].gptSearchPlaceholder} />
                    <button onClick={handleGptSearch} className="bg-red-600 text-white text-lg m-4 py-2 px-4 col-span-3 rounded-lg">
                        {language[lang].search}
                    </button>
                </form>
            </div>
            <GptMovieSuggestion/>
        </>
    );
};

export default GptSearchBar;
