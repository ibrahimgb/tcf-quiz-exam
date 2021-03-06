import React from "react";
import { useState } from "react";
import "./testResultsPage.css";
import { AiOutlineHome } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineLoop } from "react-icons/md";
import ProgressBar from "./ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestions, resetAllUserAnswer } from "../../store/quizzSlice";
import { Link } from "react-router-dom";

function TestResultsPage() {
    const dispatch = useDispatch();

    const questions = useSelector(selectQuestions);
    console.log(questions);

    /*let questions = {
        type: "structure du langage",
        content: [
            {
                questionText: "What is the capital of France?",
                answerOptions: [
                    { answerText: "New York", isCorrect: false },
                    { answerText: "London", isCorrect: false },
                    { answerText: "Paris", isCorrect: true },
                    { answerText: "Dublin", isCorrect: false },
                ],
                userAnswer: 2,
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
    };*/

    function isCorrectAnswer(index) {
        let correctAnswerIndex = null;
        for (
            let i = 0;
            i < questions.content[index].answerOptions.length;
            i++
        ) {
            if (questions.content[index].answerOptions[i].isCorrect === true) {
                correctAnswerIndex = i;
                break;
            }
        }
        if (questions.content[index].userAnswer === correctAnswerIndex) {
            return true;
        }
        return false;
    }

    function isIncorrectAnswer(index) {
        let correctAnswerIndex = null;
        for (
            let i = 0;
            i < questions.content[index].answerOptions.length;
            i++
        ) {
            if (questions.content[index].answerOptions[i].isCorrect === true) {
                correctAnswerIndex = i;
                break;
            }
        }
        if (questions.content[index].userAnswer === correctAnswerIndex) {
            return false;
        }
        if (questions.content[index].userAnswer === null) {
            return false;
        }
        return true;
    }
    /**for (let i = 0; i < questions.content.length; i++) {
        console.log(isIncorrectAnswer(i));
    } */

    function calculateScore() {
        let score = questions.content.length;

        for (let i = 0; i < questions.content.length; i++) {
            if (!isIncorrectAnswer(i)) {
                ///////////////////////////////////////////////////
                score = score - 1;
                console.log("is correct");
            }
        }
        console.log(score);
        return score;
    }

    function addClass(index) {
        if (isIncorrectAnswer(index)) {
            return "answer wrong-answer";
        }
        if (isCorrectAnswer(index)) {
            return "answer correct-answer";
        }
        return "answer";
    }

    const [score, setScore] = useState(calculateScore());
    const summary = questions.content.map((element, index) => {
        return (
            <div key={index} className={addClass(index)}>
                {index}
            </div>
        );
    });

    const errorSummary = questions.content.map((element, index) => {
        if (isIncorrectAnswer(index) || element.userAnswer == null) {
            return (
                <div key={index} className={addClass(index)}>
                    {index}
                </div>
            );
        }
    });

    return (
        <div className="main">
            <header>
                <div className="dir">Home / Test TCF / Resultats de test</div>
                <Link className="button" to="/">
                    <HiArrowNarrowRight className="icon" />
                    Retour ?? la page d'accueil
                </Link>
            </header>

            <div className="score-part">
                <h2>R??SULTATS DE VOS TESTS</h2>
                <div className="score">
                    <h4>{questions.type}</h4>
                    <h1>
                        <span>B</span> 2
                    </h1>
                    <p>
                        {questions.content.length - score} mauvaises r??ponses
                        sur {questions.content.length}
                    </p>
                    <ProgressBar
                        className="progressBar"
                        scorePersentge={Math.floor(
                            (score / questions.content.length) * 100
                        )}
                    />
                    <p className="discription">
                        Votre score pour la partie Ma??trise des structures de la
                        langue est ??gal ?? 10 % de bonnes r??ponses. Votre niveau
                        de ma??trise des structures de la langue en fran??ais
                        n'atteint pas le niveau A1 d??fini par le Cadre europ??en
                        commun de r??f??rence.
                    </p>
                </div>
            </div>
            <div className="summary">
                <h1>Summary of the test</h1>
                <div className="answers-grid">{summary}</div>
                <h1>Error summary</h1>
                <div className="answers-grid">{errorSummary}</div>
            </div>
            <div className="actions">
                <Link
                    to="/quizz"
                    className="button"
                    onClick={() => {
                        dispatch(resetAllUserAnswer());
                    }}
                >
                    <MdOutlineLoop className="icon" />
                    Try again
                </Link>
                <Link className="button" to="/">
                    <HiArrowNarrowRight className="icon" />
                    Retour ?? la page d'accueil
                </Link>
            </div>
        </div>
    );
}

export default TestResultsPage;
