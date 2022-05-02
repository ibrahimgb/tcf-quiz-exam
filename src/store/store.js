import { configureStore } from "@reduxjs/toolkit";
import quizzReducer from "./quizzSlice";
import typeReducer from "./typeSlice";
export const store = configureStore({
    reducer: {
        questions: quizzReducer,
        type: typeReducer,
    },
});
