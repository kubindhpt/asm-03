import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popup.js";
import loginReducer from "./login.js";
import cartReducer from "./cart.js";
const store = configureStore({
  reducer: { popup: popupReducer, login: loginReducer, cart: cartReducer },
});

export default store;
