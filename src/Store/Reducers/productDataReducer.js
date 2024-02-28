import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const GetProductData = createAsyncThunk("GetProductData", async () => {
  const response = await axios.get("https://dummyjson.com/products");
 
  return response?.data;
});

const productsData = createSlice({
  name: "productsDataSclide",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProductData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetProductData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(GetProductData.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default productsData.reducer;
