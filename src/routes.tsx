import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Book from "./pages/book";
import VenuePage from "./pages/venue";
import Profile from "./pages/profile";

export const router = createBrowserRouter ([

    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/book",
        element: <Book />,
        errorElement: <Error />,
    },
    {
        path: "/venue",
        element: <VenuePage/>,
        errorElement: <Error />,
    },
    {
        path: "/profile",
        element: <Profile/>,
        errorElement: <Error />,
    }
])