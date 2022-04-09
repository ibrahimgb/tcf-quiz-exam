import React from "react";
import "./quizzSection.css";
import { MdTimer } from "react-icons/md";
import { BsHeadphones } from "react-icons/bs";
import ReactAudioPlayer from "react-audio-player";
import { IoMdArrowDropdown } from "react-icons/io";
import Play from "../../resources/play.ogg";

function QuizzSection() {
    return (
        <div className="quizzSection">
            <div className="head">
                <div className="contents-table-index">
                    {" "}
                    <p>
                        <span>01</span>/80
                    </p>
                    <IoMdArrowDropdown className="ioMdArrowDropdown" />
                    {/*
                   
                    <div className="indexing-details">
                        <div className="contents-table-index">
                            {" "}
                            <p>
                                <span>01</span>/80
                            </p>
                            <IoMdArrowDropdown className="ioMdArrowDropUp" />
                        </div>

                        <div class="grid-container">
                            <div class="grid-item">1</div>
                            <div class="grid-item">2</div>
                            <div class="grid-item">3</div>
                            <div class="grid-item">4</div>
                            <div class="grid-item">5</div>
                            <div class="grid-item">6</div>
                            <div class="grid-item">7</div>
                            <div class="grid-item">8</div>
                            <div class="grid-item">9</div>
                        </div>

                        <h6>Vous avez répondu à 1 question.</h6>
                        <p>Aucune question sauvegardée.</p>
                    </div>
                   
                   */}
                </div>
                <div className="timer">
                    {" "}
                    <MdTimer /> 89:51
                </div>
            </div>
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
                <div className="quizzOptions">
                    <h6>Cliquez sur votre réponse</h6>
                    <div className="option">
                        <div className="optionId">A</div>
                        <p>Reponse A</p>
                    </div>
                    <div className="option">
                        <div className="optionId">B</div>
                        <p>Reponse B</p>
                    </div>
                    <div className="option">
                        <div className="optionId">C</div>
                        <p>Reponse C</p>
                    </div>
                    <div className="option">
                        <div className="optionId">D</div>
                        <p>Reponse D</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="stop">arrêtez le test</div>
                <div className="next">question suivante</div>
            </div>
        </div>
    );
}

export default QuizzSection;
