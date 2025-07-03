import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log("SignOut Error", error);
            });
    };

    return (
        <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black flex justify-between items-center z-10">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" width="200px" />
            {user && (
                <div className="flex gap-3">
                    <p className="font-bold text-black text-2xl">{user.displayName}</p>
                    <img src={user?.photoURL} alt="user-icon" width="40px" className="rounded-lg" />
                    <button onClick={handleSignOut} className="font-bold text-white bg-red-600 py-2 px-4 rounded-lg">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
