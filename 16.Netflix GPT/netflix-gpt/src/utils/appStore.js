import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        gpt: gptReducer,
        movies: moviesReducer,
        config: configReducer,
    },
});
