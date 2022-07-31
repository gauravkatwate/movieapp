import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (movieName) => {
    return fetch(
      `https://www.omdbapi.com/?apikey=99baa242&s=${movieName}`
    ).then((res) => res.json());
  }
);

export const getMovie = createAsyncThunk("movies/getMovie", async (movieID) => {
  return fetch(`https://www.omdbapi.com/?apikey=99baa242&i=${movieID}`).then(
    (res) => res.json()
  );
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    loading: false,
  },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      state.loading = true;
    },
    [getMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    [getMovie.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default movieSlice.reducer;
