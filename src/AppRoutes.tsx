import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Books from "./pages/Books/Books";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Book from "./pages/Book/Book";
import Layout from "./components/Layout";
import Logout from "./pages/Logout/Logout";
import PrivateRoute from "./components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/books" element={<Books />} />
        <Route path="/books/:uuid" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
