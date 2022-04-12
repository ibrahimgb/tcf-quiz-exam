import React, { useState } from "react";
import "./quizzSection.css";
import OralComprehension from "./OralComprehension";
import LanguageStructure from "./LanguageStructure";
import WrittenComprehension from "./WrittenComprehension";
import EndTheExamPopUp from "./EndTheExamPopUp";
import TcfContainerSummaryQuestion from "./TcfContainerSummaryQuestion";
import { MdTimer } from "react-icons/md";

import { IoMdArrowDropdown } from "react-icons/io";

import { HiOutlineArrowSmRight } from "react-icons/hi";

function QuizzSection() {
    let questions = {
        type: "writtenComprehension",
        content: [
            {
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
    const [questionsSet, setQuestionsSet] = useState(questions.content);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState(null);

    function setUserAnswerOfThisQuizz(index) {
        setUserAnswer(index);
        questions.content[currentQuestion].userAnswer = index;
        console.log("the user anser of " + currentQuestion + " is: " + index);
        console.log(questionsSet);
        setQuestionsSet((set) => {
            const newSet = [...set];
            newSet[currentQuestion].userAnswer = index;
            return newSet;
        });
        console.log(questionsSet);
    }

    const [showSummaryQuestion, setShowSummaryQuestion] = useState(false);
    const [endTheTestContinueShowing, setEndTheTestContinueShowing] =
        useState(false);
    //console.log(questions.content);
    return (
        <div className="quizzSection">
            <div className="head">
                <div>
                    <div
                        className="contents-table-index"
                        onClick={() => {
                            setShowSummaryQuestion(true);
                            //console.log("clicked the btn");
                        }}
                    >
                        {" "}
                        <p>
                            <span>
                                {currentQuestion < 9 ? "0" : ""}
                                {currentQuestion + 1}
                            </span>
                            /{questionsSet.length < 9 ? "0" : ""}
                            {questionsSet.length}
                        </p>
                        <IoMdArrowDropdown className="ioMdArrowDropdown" />
                    </div>

                    {showSummaryQuestion ? (
                        <TcfContainerSummaryQuestion
                            show={showSummaryQuestion}
                            onClickOutside={() => {
                                setShowSummaryQuestion(false);
                            }}
                            questions={questionsSet}
                            setCurrentQuestion={setCurrentQuestion}
                            setUserAnswer={setUserAnswer}
                        />
                    ) : (
                        ""
                    )}
                </div>
                <div className="timer">
                    {" "}
                    <MdTimer /> 89:51
                </div>
            </div>
            {questions.type === "oralComprehension" && (
                <OralComprehension
                    question={questionsSet[currentQuestion]}
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswerOfThisQuizz}
                />
            )}
            {questions.type === "languageStructure" && (
                <LanguageStructure
                    question={questionsSet[currentQuestion]}
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswerOfThisQuizz}
                />
            )}
            {questions.type === "writtenComprehension" && (
                <WrittenComprehension
                    question={questionsSet[currentQuestion]}
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswerOfThisQuizz}
                />
            )}

            <div className="bottom">
                <div
                    className="stop"
                    onClick={() => {
                        setEndTheTestContinueShowing(true);
                    }}
                >
                    Arrêtez le test
                </div>
                <div
                    className="next"
                    onClick={() => {
                        setCurrentQuestion(currentQuestion + 1);
                        setUserAnswer(null);
                    }}
                >
                    {currentQuestion + 1 === questionsSet.length
                        ? "Terminé le test"
                        : "Question suivante"}

                    <HiOutlineArrowSmRight className="hiOutlineArrowSmRight" />
                </div>
            </div>

            {endTheTestContinueShowing ? (
                <EndTheExamPopUp
                    setEndTheTestContinueShowing={setEndTheTestContinueShowing}
                    show={endTheTestContinueShowing}
                    onClickOutside={() => {
                        setEndTheTestContinueShowing(false);
                        console.log("haging");
                    }}
                />
            ) : (
                ""
            )}
        </div>
    );
}

export default QuizzSection;
