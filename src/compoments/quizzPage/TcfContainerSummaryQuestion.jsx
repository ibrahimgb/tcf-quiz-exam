import React from "react";
import { useEffect, useRef } from "react";

function TcfContainerSummaryQuestion(props) {
    const ref = useRef(null);
    const { onClickOutside } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (!props.show) return null;

    const questions = props.questions.map((question, index) => {
        console.log(question.userAnswer);
        return (
            <div
                key={index}
                className={
                    question.userAnswer === null
                        ? "grid-item"
                        : "grid-item item-passd"
                }
                onClick={() => {
                    props.setCurrentQuestion(index);
                    props.setUserAnswer(null);
                }}
            >
                {index + 1}
            </div>
        );
    });
    console.log("rerendering");

    return (
        <div ref={ref} className="indexing-details">
            <div className="indexing-details-head">
                <div className="contents-table-index">
                    {" "}
                    <p className="number">
                        <span>01</span>/80
                    </p>
                </div>
                {/*
                
                <button
                    onClick={() => {
                        setSummaryQuestionIsActive(false);
                    }}
                >
                    <TiDeleteOutline size={22} className="tiDeleteOutline" />
                </button>
        
                */}
            </div>

            <div className="grid-container">{questions}</div>

            <h6>Vous avez répondu à 1 question.</h6>
            <p>Aucune question sauvegardée.</p>
        </div>
    );
}

TcfContainerSummaryQuestion.propTypes = {};

export default TcfContainerSummaryQuestion;
