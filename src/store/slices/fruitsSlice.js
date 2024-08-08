import { createSlice } from "@reduxjs/toolkit";

const fruitsSlice = createSlice({
  name: "fruitSlice",
  initialState: {
    fruits: ["Apples", "Mangoes", "Bananas", "Grapes"],
    newFruit: "",
  },
  reducers: {
    addFruit: (state, action) => {
      state.fruits.push(action.payload);
    },
    updateFruit: (state, action) => {
      state.newFruit = action.payload;
    },
  },
});

export default fruitsSlice;
