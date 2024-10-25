import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from './pages/login/Login';
import Components from "./pages/components/Components";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Components />
    },
    {
        path: 'login',
        element: <Login />
    }
]);

export default router;