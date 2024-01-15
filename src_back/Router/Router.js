import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Movies from "../Pages/Movies";

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
           /* {
                path: "/popular",
                element: <Index />,
            },
            {
                path: "/battle",
                element: <Battle />,
            },
            {
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