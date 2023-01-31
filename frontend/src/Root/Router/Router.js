import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../Pages/Authentication/SignIn/SignIn";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import Admin from "../../Pages/Dashboard/Admin/Admin";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Frontend from "../../Pages/Dashboard/Frontend/Frontend";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            // PRIVATE ROUTER 
            // {
            //     path: '/dashboard',
            //     element: <PrivateRoute><AdminLayout></AdminLayout></PrivateRoute>,
            // }
        ]
    },

    {
        path : '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/frontend',
                element: <Frontend></Frontend>
            },
            {
                path: '/dashboard/admin',
                element: <Admin></Admin>
            },
        ]
    },

    {
        path: '*',
        element: <NotFound></NotFound>
    }
])