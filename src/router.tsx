import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from './pages/login/Login';
import Components from "./pages/components/Components";
import Homepage from "./pages/homepage/Homepage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Components />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'homepage',
        element: <Homepage />
    },
]);

export default router;