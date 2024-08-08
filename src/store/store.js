import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import fruitSlice from "./slices/fruitsSlice";

const store = configureStore({
  reducer: {
    countState: counterSlice.reducer,
    fruitState: fruitSlice.reducer,
  },
});

export default store;
