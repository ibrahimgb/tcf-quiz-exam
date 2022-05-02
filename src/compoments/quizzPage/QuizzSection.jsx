import React, { useState } from "react";
import "./quizzSection.css";
import OralComprehension from "./OralComprehension";
import LanguageStructure from "./LanguageStructure";
import WrittenComprehension from "./WrittenComprehension";
import EndTheExamPopUp from "./EndTheExamPopUp";
import Clock from "./Clock";
import TcfContainerSummaryQuestion from "./TcfContainerSummaryQuestion";
import { useDispatch, useSelector } from "react-redux";
import { MdTimer } from "react-icons/md";
import { selectedType, changeType } from "../../store/typeSlice";
import { TYPE } from "../home/HomePage";
import { Link } from "react-router-dom";
//import { Clock } from "./Clock";

import {
    editUserAnswer,
    removeUserAnswer,
    selectQuestions,
} from "../../store/quizzSlice";

import { IoMdArrowDropdown } from "react-icons/io";

import { HiOutlineArrowSmRight } from "react-icons/hi";
//  dispatch(editAnswer(questionIndex,userAnswer));
////  dispatch(removeAnswer(questionIndex));

function QuizzSection() {
    const questions = useSelector(selectQuestions);
    const userSelectedType = useSelector(selectedType);
    console.log(userSelectedType);
    console.log(TYPE.Oral_comprehension);
    const dispatch = useDispatch();

    const [questionsSet, setQuestionsSet] = useState(questions.content);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState(null);

    function setUserAnswerOfThisQuizz(index) {
        setUserAnswer(index);
        //questions.content[currentQuestion].userAnswer = index;
        dispatch(editUserAnswer({ currentQuestion, index }));
        //dispatch(editAnswer(currentQuestion, index));
        //console.log("the user anser of " + currentQuestion + " is: " + index);
        //console.log(questionsSet);
        /*setQuestionsSet((set) => {
            const newSet = [...set];
            newSet[currentQuestion].userAnswer = index;
            return newSet;
        });*/
        // console.log(questionsSet);
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
                        {/* <IoMdArrowDropdown className="ioMdArrowDropdown" /> */}
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
                    {/*  <MdTimer /> */} <Clock />
                </div>
            </div>
            {userSelectedType.type === TYPE.Oral_comprehension && (
                <OralComprehension
                    question={questionsSet[currentQuestion]}
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswerOfThisQuizz}
                />
            )}
            {userSelectedType.type === TYPE.Language_structure && (
                <LanguageStructure
                    question={questionsSet[currentQuestion]}
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswerOfThisQuizz}
                />
            )}
            {userSelectedType.type === TYPE.Written_comprehension && (
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
                {currentQuestion + 1 === questionsSet.length ? (
                    <Link
                        to="/test-results"
                        className="next"
                        onClick={() => {
                            setCurrentQuestion(currentQuestion + 1);
                            setUserAnswer(null);
                        }}
                    >
                        Terminé le test
                        <HiOutlineArrowSmRight className="hiOutlineArrowSmRight" />
                    </Link> //"Terminé le test"
                ) : (
                    <div
                        className="next"
                        onClick={() => {
                            setCurrentQuestion(currentQuestion + 1);
                            setUserAnswer(null);
                        }}
                    >
                        Question suivante
                        <HiOutlineArrowSmRight className="hiOutlineArrowSmRight" />
                    </div>
                )}
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
