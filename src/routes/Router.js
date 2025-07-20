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
        element: <ProtectedRoute auth={true}/>,
        children: [
            {
                path: "/",
                element:<BrowserRoute />
            },
            {
                path: "watch/:videoKey",
                element: <PlayVideo />,
            },
        ],
    },
    {
        element: <ProtectedRoute auth={false} />,
        children: [
            {
                path: "auth",
                element: <Login />, // Header + nested routes
            }
        ],
    },
]);

export default router;
