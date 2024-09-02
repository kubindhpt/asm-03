import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./assets/css/style.css";
import LayOut from "./components/UI/LayOut/LayOut";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import DetailPage from "./pages/Detail/DetailPage";
import CartPage from "./pages/Cart/CartPage";
import CheckOutPage from "./pages/CheckOut/CheckOutPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail/:productId" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
