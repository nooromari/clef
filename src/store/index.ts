import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer, songReducer } from "./reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    song: songReducer,
  },
  middleware: [thunk],
});
export default store;
