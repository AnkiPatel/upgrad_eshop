import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../Resources/ProductData/ProductData";

const initialState = {
  allProducts: [...ProductData],
  status: "idle", //pending,success,failure
};

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.allProducts = [...state.allProducts, action.payload];
    },
    deleteProduct: (state, action) => {
      console.log(action.payload);
      let allvalues = state.allProducts;
      let value = allvalues.filter((f) => f.id != action.payload.id);
      state.allProducts = value;
    },
    editProduct: (state, action) => {
      console.log(action.payload);
      let value = state.allProducts.map((data) => {
        if (data.id === action.payload.id) {
          data = action.payload;
        }
        return data;
      });
      console.log(value);
      state.allProducts = value;
    },
  },
});
export const getProducts = (state) => state.ProductSlice;
export const { addProduct, deleteProduct, editProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
