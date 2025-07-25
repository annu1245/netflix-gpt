import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null
  },
  reducers: {
    toggleGptSeachView : (state, action) => {
      state.showGptSearch = !state.showGptSearch
    },
    addGptSearchMovies: (state, action) => {
      const {movieNames, movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  }
})

export const { toggleGptSeachView, addGptSearchMovies } = gptSlice.actions;
export default gptSlice.reducer;