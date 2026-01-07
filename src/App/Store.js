import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/products/ProductSlice";
import cartReducer from "../Features/cart/cartSlice";
import authReducer from "../Features/Auth/authSlice";
import favoriteReducer from "../Features/Favorite/favoriteSlice"; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    auth: authReducer,
    favorite: favoriteReducer, 
  },
});
