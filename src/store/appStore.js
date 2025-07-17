import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import appCongigReducer from './appConfigSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: appCongigReducer
  }
})

export default appStore;