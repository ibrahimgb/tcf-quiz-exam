import React, { useState } from "react";

/**
 *   questionText: "How many Harry Potter books are there?",
                answerOptions: [
                    { answerText: "1", isCorrect: false },
                    { answerText: "4", isCorrect: false },
                    { answerText: "6", isCorrect: false },
                    { answerText: "7", isCorrect: true },
                ],
                userAnswer: "",
 */

function LanguageStructure({ question, userAnswer, setUserAnswer }) {
    console.log("rerendering");
    //console.log(question.questionText);
    const ids = ["A", "B", "C", "D"];

    function setUserAnswerid(index) {
        if (userAnswer != index) {
            setUserAnswer(index);
        } else {
            setUserAnswer(null);
        }
    }
    console.log("the thing that you are loking for is ");
    console.log(question);
    const answerOptions = question.answerOptions.map((option, index) => {
        return (
            <div
                className={
                    index === userAnswer || index === question.userAnswer
                        ? "option selected"
                        : "option"
                }
                key={index}
                onClick={() => {
                    setUserAnswerid(index);
                }}
            >
                <div className="optionId">{ids[index]}</div>
                <p>{option.answerText}</p>
            </div>
        );
    });
    return (
        <>
            <h4>STRUCTURE DE LA LANGUE</h4>
            <h5>
                Choisissez la bonne réponse et cliquez sur le bouton
                correspondant.
            </h5>
            <div className="quizz quizz-lg-structure">
                <h3>{question.questionText}</h3>
                <div className="quizzOptions">{answerOptions}</div>
            </div>
        </>
    );
}

export default LanguageStructure;
