import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import LoginSlice from "./Slices/LoginSlice";
import ProductSlice from "./Slices/ProductSlice";

const store = configureStore({
  reducer: {
    CartSlice: CartSlice,
    LoginSlice: LoginSlice,
    ProductSlice:ProductSlice
  },
});
export default store