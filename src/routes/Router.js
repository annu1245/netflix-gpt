import React from "react";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />, // Header + nested routes
        index: true,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "browse",
                element: (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                ),
            },
            {
                path: "watch",
                element: <PlayVideo />,
            },
        ],
    },
]);

export default router;
