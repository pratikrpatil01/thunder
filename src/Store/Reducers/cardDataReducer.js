import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cardData: [],
  isLoading: false,
  error: null,
};

const cardSlice = createSlice({
  name: "cardDataSlice",
  initialState,

  reducers: {
    addDataToCard: (state, action) => {
     
      state.cardData = [...state.cardData, action.payload];
    },
    removeDataToCard: (state, action) => {
     

      state.cardData = state?.cardData?.filter(
        (item, index) => item.id !== action.payload
      );
    },
  },
});

export const { addDataToCard, removeDataToCard } = cardSlice.actions;

export default cardSlice.reducer;
