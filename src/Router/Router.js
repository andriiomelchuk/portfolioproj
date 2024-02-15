import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Movies from "../Pages/Movies";
import Popular from '../Pages/Popular'
import Battle from "../Pages/Battle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/movies",
                element: <Movies />,
            },
            {
                path: "/popular",
                element: <Popular />,
            },
            {
                path: "/battle",
                element: <Battle />,
            },
           /* {
                path: "battle/results",
                element: <Results />,
            },*/
            {
                path: "*",
                element: <ErrorPage />,
            },
        ]
    }
])

export default router