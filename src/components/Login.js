import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);

    const toggleForm = () => {
        setSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt="bg-img" />
            </div>
            <form className="absolute bg-black w-3/12 my-20 py-10 px-10 mx-auto right-0 left-0 text-white rounded bg-opacity-80">
                <h1 className="text-2xl font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-3 w-full bg-gray-700" />}

                <input type="text" placeholder="Email Address" className="p-2 my-3 px-2 w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-2 my-3 w-full bg-gray-700" />
                <button className="bg-red-600 p-2 px-4 my-3 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p onClick={toggleForm} className="my-2 p-2 cursor-pointer">
                    {isSignInForm ? "New To NetFlix? Sign Up Now" : "Already registered? Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;
