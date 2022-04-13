import React from "react";
import { useState } from "react";
import "./testResultsPage.css";
import { AiOutlineHome } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineLoop } from "react-icons/md";
import ProgressBar from "./ProgressBar";

function TestResultsPage() {
    let questions = {
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
                userAnswer: 0,
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
                userAnswer: 3,
            },
        ],
    };

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
            if (isIncorrectAnswer(i)) {
                score = score - 1;
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
        return <div className={addClass(index)}>{index}</div>;
    });

    const errorSummary = questions.content.map((element, index) => {
        if (isIncorrectAnswer(index) || element.userAnswer == null) {
            return <div className={addClass(index)}>{index}</div>;
        }
    });

    return (
        <div className="main">
            <header>
                <div className="dir">Home / Test TCF / Resultats de test</div>
                <div className="button">
                    {/*
                    
                    <AiOutlineHome className="icon" /> 

                    */}
                    Retour à la page d'accueil
                </div>
            </header>

            <div className="score-part">
                <h2>RÉSULTATS DE VOS TESTS</h2>
                <div className="score">
                    <h4>{questions.type}</h4>
                    <h1>
                        <span>B</span> 2
                    </h1>
                    <p>
                        {questions.content.length - score} mauvaises réponses
                        sur {questions.content.length}
                    </p>
                    <ProgressBar
                        className="progressBar"
                        scorePersentge={Math.floor(
                            (score / questions.content.length) * 100
                        )}
                    />
                    <p className="discription">
                        Votre score pour la partie Maîtrise des structures de la
                        langue est égal à 10 % de bonnes réponses. Votre niveau
                        de maîtrise des structures de la langue en français
                        n'atteint pas le niveau A1 défini par le Cadre européen
                        commun de référence.
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
                <div className="button">
                    {/*
                       
                        <MdOutlineLoop className="icon" />

                       */}
                    Try again
                </div>
                <div className="button">
                    {/**
                         
                         <HiArrowNarrowRight className="icon" /> 
                         
                         */}
                    Retour à la page d'accueil
                </div>
            </div>
        </div>
    );
}

export default TestResultsPage;
