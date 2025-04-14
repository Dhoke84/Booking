import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Book from "./pages/book";
import VenuePage from "./pages/venue";
import Profile from "./pages/profile";
import VenueDetails from "./pages/details";
import SubDetails from "./pages/subDetails";
import ConfirmBooking from "./pages/confirm";

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
    },
    {
        path: "/details/:id",
        element: <VenueDetails />,
        errorElement: <Error />,
      },
      {
        path: "/details",
        element: <SubDetails />,
        errorElement: <Error />,
      },
      {
        path: "/confirm-booking",
        element: <ConfirmBooking />,
        errorElement: <Error />,

      
      },
      


      
])