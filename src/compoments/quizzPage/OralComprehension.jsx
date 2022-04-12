import React from "react";
import "./quizzSection.css";
import { BsHeadphones } from "react-icons/bs";
import ReactAudioPlayer from "react-audio-player";
import Play from "../../resources/play.ogg";
function OralComprehension({ question, userAnswer, setUserAnswer }) {
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
            <h4>COMPRÉHENSION ORALE</h4>
            <h5>
                Écoutez la question et les 4 réponses. Choisissez la réponse qui
                correspond à la question et cliquez sur le bouton correspondant.
            </h5>
            <div className="quizz">
                <div className="audio">
                    <BsHeadphones className="bsHeadphones" size={180} />
                    <ReactAudioPlayer
                        className="react-audio-player"
                        src={Play}
                        autoPlay
                        controls
                    />
                </div>
                <div className="quizzOptions">{answerOptions}</div>
            </div>
        </>
    );
}

export default OralComprehension;
