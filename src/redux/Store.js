import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./feature/movieSlice";

export default configureStore({
  reducer: {
    movie: MovieReducer,
  },
});
