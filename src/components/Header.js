import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { LOGO, searchLanguages } from "../utils/constants";
import { toggleGptSeachView } from "../store/gptSlice";
import { changeLanguage } from "../store/appConfigSlice";

const Header = () => {

    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log("SignOut Error", error);
            });
    };

    const dispatch = useDispatch();
    const handleGptSearch = () => {
        dispatch(toggleGptSeachView())
    }


    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black flex justify-between items-center z-10">
            <img src={LOGO} alt="logo" width="200px" />
            {user && (
                <div className="flex gap-3">
                    {
                        showGptSearch && ( <select className="px-4 py-2 m-2 bg-gray-700 text-white" onChange={handleLanguageChange}>
                        {
                            searchLanguages.map(lang =>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                        }
                    </select>)
                    }
                   
                    <button 
                        className="bg-purple-500 text-white px-4 py-2 mx-2 rounded-lg"
                        onClick={handleGptSearch}
                        > {showGptSearch ? "Home" : "Gpt Search"}
                         </button>
                    <p className="font-bold text-black text-2xl bg-white bg-opacity-20 px-4 py-2 rounded-lg mx-2">{user.displayName}</p>
                    <img src={user?.photoURL} alt="user-icon" width="45px" className="rounded-lg" />
                    <button onClick={handleSignOut} className="font-bold text-white bg-red-600 py-2 px-4 rounded-lg">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
