import React from "react";
import { createBrowserRouter } from "react-router";
import Login from '../components/Login';
import ProtectedRoute from './ProtectedRoute';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
import PlayVideo from '../components/PlayVideo';
import BrowserRoute from "./BrowserRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />, // Header + nested routes
        index: true,
    },
    {
        element: <ProtectedRoute/>,
        children: [
            {
                path: "browse",
                element:<BrowserRoute/>
            },
            {
                path: "watch",
                element: <PlayVideo />,
            },
        ],
    },
]);

export default router;
