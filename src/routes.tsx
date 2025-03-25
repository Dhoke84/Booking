import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Book from "./pages/book";
import VenueList from "./components/Venue";

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
        element: <VenueList />,
        errorElement: <Error />,
    }
])