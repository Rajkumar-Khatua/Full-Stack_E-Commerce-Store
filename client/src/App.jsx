import { useState } from "react";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/SinglePage/Product";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  redirect
} from "react-router-dom";
import Success from "./pages/Sucess/Success";

const user = false;
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      {/* <Route path="/products/" element={<ProductList/>}/> */}
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/register" element={user ? <Navigate to="/" replace/>: <Register/>}/>
      <Route path="/login" element={user ? <Navigate to="/" replace/>: <Login/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
