import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const passoword = useRef(null);

    const toggleForm = () => {
        setSignInForm(!isSignInForm);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const message = validate(email.current.value, passoword.current.value, name?.current?.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            //signup form
            createUserWithEmailAndPassword(auth, email.current.value, passoword.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                    })
                        .then(() => {
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(addUser({uid, email, displayName, photoURL}))
                            navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, passoword.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt="bg-img" />
            </div>
            <form className="absolute bg-black w-3/12 my-20 py-10 px-10 mx-auto right-0 left-0 text-white rounded bg-opacity-80">
                <h1 className="text-2xl font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-2 my-3 w-full bg-gray-700" />}
                <input ref={email} type="text" placeholder="Email Address" className="p-2 my-3 px-2 w-full bg-gray-700" />
                <input ref={passoword} type="password" placeholder="Password" className="p-2 my-3 w-full bg-gray-700" />
                <p className="text-red-500 font-bold py-2">{errorMessage}</p>
                <button onClick={handleClick} className="bg-red-600 p-2 px-4 my-3 w-full rounded-lg">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p onClick={toggleForm} className="my-2 p-2 cursor-pointer">
                    {isSignInForm ? "New To NetFlix? Sign Up Now" : "Already registered? Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;
