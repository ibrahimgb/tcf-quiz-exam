import React from "react";
import IMG from "../../resources/tcf.jpeg";

function WrittenComprehension({ question, userAnswer, setUserAnswer }) {
    //console.log("rerendering");
    //console.log(question.questionText);
    const ids = ["A", "B", "C", "D"];

    function setUserAnswerid(index) {
        if (userAnswer != index) {
            setUserAnswer(index);
        } else {
            setUserAnswer(null);
        }
    }
    //console.log("the thing that you are loking for is ");
    //console.log(question);
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
            <h4>COMPRÉHENSION ÉCRITE</h4>
            <h5>
                Lisez les documents. Pour chaque question, choisissez la bonne
                réponse et cliquez sur le bouton correspondant.
            </h5>
            <div className="quizz">
                <img src={IMG} />
                <div className="quizzOptions">
                    <h6>Cliquez sur votre réponse</h6>
                    {answerOptions}
                </div>
            </div>
        </>
    );
}

export default WrittenComprehension;
