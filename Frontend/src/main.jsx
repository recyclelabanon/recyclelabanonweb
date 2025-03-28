import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Initiatives from "./Pages/Initiatives.jsx";
import Team from "./Pages/Team.jsx";
import Contacts from "./Pages/Contact.jsx";
import Newsroom from "./Pages/News.jsx";
import JoinUs from "./components/JoinUs.jsx";
import InitiativesDetails from "./components/InitiativesDetails.jsx";
// import About from "./Pages/About.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import Thematic from "./Pages/Thematic.jsx";
// import Project from "./components/Projects/Project.jsx";
// import Admin from "./Admin/Admin.jsx";
// import Newss from "./Pages/News.jsx";
// import Gallery from "./Pages/Gallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/initiatives",
        element: <Initiatives />,
      },
      {
        path: "/initiatives/:id",
        element: <InitiativesDetails />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/news",
        element: <Newsroom />,
      },
      {
        path: "/joinus",
        element: <JoinUs />,
      },
      // {
      //   path: "/admin-page",
      //   element: <Admin />,
      // },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);