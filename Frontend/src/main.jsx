import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Initiatives from "./Pages/Initiatives.jsx";
import Team from "./Pages/Team.jsx";
import Contacts from "./Pages/Contact.jsx";
import Newsroom from "./Pages/News.jsx";
import JoinUs from "./components/JoinUs.jsx";
import InitiativesDetails from "./components/InitiativesDetails.jsx";
import Donate from "./Pages/Donates.jsx";
import Event from "./Pages/Events.jsx";
import Blog from "./Pages/Blogs.jsx";
import EventDetails from "./components/Event/EventDetails.jsx";
import Layout from "./Admin/Components/Layout.jsx";
import Dashboard from "./Admin/Pages/Dashboard.jsx";
import Blogs from "./Admin/Pages/Blogs.jsx";
import Events from "./Admin/Pages/Events.jsx";
import News from "./Admin/Pages/News.jsx";
import Teams from "./Admin/Pages/Teams.jsx";
import Programs from "./Admin/Pages/Programs.jsx";
import Contact from "./Admin/Pages/Contact.jsx";
import BlogDetail from "./components/BlogDetails.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import NewBlog from "./Admin/Components/NewBlog.jsx";
import EditBlog from "./Admin/Components/EditBlog.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Auth Routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          {/* Admin Routes - Protected */}
          <Route path="admin" element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/new" element={<NewBlog />} />
            <Route path="blogs/edit/:id" element={<EditBlog />} />
            <Route path="teams" element={<Teams />} />
            <Route path="news" element={<News />} />
            <Route path="events" element={<Events />} />
            <Route path="programs" element={<Programs />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
          
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="initiatives" element={<Initiatives />} />
          <Route path="initiatives/:id" element={<InitiativesDetails />} />
          <Route path="team" element={<Team />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="news" element={<Newsroom />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="events" element={<Event />} />
          <Route path="events/:id" element={<EventDetails />} />
          <Route path="donate" element={<Donate />} />
          <Route path="joinus" element={<JoinUs />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);