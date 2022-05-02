import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { type: "Language_structure" };

export const quizzSlice = createSlice({
    name: "type",
    initialState,
    //currentQuestion, index
    reducers: {
        changeType: (state, action) => {
            state.type = action.payload;
        },
    },
});

export const { changeType } = quizzSlice.actions;
export const selectedType = (state) => state.type;
export default quizzSlice.reducer;
