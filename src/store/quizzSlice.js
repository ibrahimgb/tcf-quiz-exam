import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    type: "writtenComprehension",
    content: [
        {
            id: 1,
            questionText: "What is the capital of France?",
            answerOptions: [
                { answerText: "New York", isCorrect: false },
                { answerText: "London", isCorrect: false },
                { answerText: "Paris", isCorrect: true },
                { answerText: "Dublin", isCorrect: false },
            ],
            userAnswer: null,
        },
        {
            id: 2,
            questionText: "Who is CEO of Tesla?",
            answerOptions: [
                { answerText: "Jeff Bezos", isCorrect: false },
                { answerText: "Elon Musk", isCorrect: true },
                { answerText: "Bill Gates", isCorrect: false },
                { answerText: "Tony Stark", isCorrect: false },
            ],
            userAnswer: null,
        },
        {
            id: 3,
            questionText: "The iPhone was created by which company?",
            answerOptions: [
                { answerText: "Apple", isCorrect: true },
                { answerText: "Intel", isCorrect: false },
                { answerText: "Amazon", isCorrect: false },
                { answerText: "Microsoft", isCorrect: false },
            ],
            userAnswer: null,
        },
        {
            id: 4,
            questionText: "How many Harry Potter books are there?",
            answerOptions: [
                { answerText: "1", isCorrect: false },
                { answerText: "4", isCorrect: false },
                { answerText: "6", isCorrect: false },
                { answerText: "7", isCorrect: true },
            ],
            userAnswer: null,
        },
    ],
};

export const quizzSlice = createSlice({
    name: "quizzes",
    initialState,
    //currentQuestion, index
    reducers: {
        editUserAnswer(state, action) {
            const { currentQuestion, index } = action.payload;

            //console.log(action.payload.currentQuestion);
            //console.log(action.payload);
            const question = state.content[currentQuestion];
            //console.log(current(question));
            if (question) {
                question.userAnswer = index;
            }
        },
        removeUserAnswer(state, action) {
            const { currentQuestion, index } = action.payload;

            //console.log(action.payload.currentQuestion);
            //console.log(action.payload);
            const question = state.content[currentQuestion];
            //console.log(current(question));
            if (question) {
                question.userAnswer = null;
            }
        },
        resetAllUserAnswer(state, action) {
            const question = state.content.forEach((question) => {
                question.userAnswer = null;
            });
        },
    },
});

export const { editUserAnswer, removeUserAnswer, resetAllUserAnswer } =
    quizzSlice.actions;
export const selectQuestions = (state) => state.questions;
export default quizzSlice.reducer;
