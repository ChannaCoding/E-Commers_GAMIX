import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/products/ProductSlice";
import cartReducer from "../Features/cart/cartSlice";
import authReducer from "../Features/auth/authSlice";
import favoriteReducer from "../Features/favorite/favoriteSlice"; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    auth: authReducer,
    favorite: favoriteReducer, 
  },
});
