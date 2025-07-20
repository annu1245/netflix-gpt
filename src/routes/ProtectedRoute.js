import { Navigate, useNavigate, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { auth } from "../utils/firebase";
import { removeUser, addUser } from "../store/userSlice";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ auth: authProp }) => {
    const dispatch = useDispatch();
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                setIsLoading(false);
                setAuthenticated(true);
            } else {
                setIsLoading(false);
                dispatch(removeUser());
                setAuthenticated(false);
            }
        });
        // unsubscribe when component unmount
        return () => unsubscribe();
    }, [auth]);

    if (!isLoading && !authenticated && authProp) {
        return <Navigate to="/auth" replace />;
    }

    if (!isLoading && authenticated && !authProp) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <Header /> <Outlet />
        </>
    );
};

export default ProtectedRoute;
