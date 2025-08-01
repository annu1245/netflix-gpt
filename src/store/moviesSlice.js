import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    watchNowMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    }, 
    addWatchNowMovie: (state, action) => {
      state.watchNowMovie = action.payload;
    }
  }
})

export const { addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addPopularMovies, addWatchNowMovie } = moviesSlice.actions;
export default moviesSlice.reducer;