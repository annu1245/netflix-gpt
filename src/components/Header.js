import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log("SignOut Error", error);
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate('/browse')
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/')
            }
        });
        // unsubscribe when component unmount
        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black flex justify-between items-center z-10">
            <img src={LOGO} alt="logo" width="200px" />
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
