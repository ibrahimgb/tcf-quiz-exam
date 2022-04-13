import React from "react";
import { useRef } from "react";

function ProgressBar({ scorePersentge }) {
    const number = useRef(null);
    let counter = 0;
    let percentage = scorePersentge;
    let score = 437 - (437 * percentage) / 100;
    let r = document.querySelector(":root");

    function myFunction_set() {
        r.style.setProperty("--score", score);
    }

    myFunction_set();

    setInterval(() => {
        if (counter >= percentage) {
            clearInterval();
        } else {
            counter++;
            number.innerText = counter;
        }
    }, 2000 / percentage);

    return (
        <div className="score-sircle">
            <div className="outer">
                <div className="inner">
                    <div ref={number}>{percentage}%</div>
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="180px"
                height="180px"
            >
                <circle cx="90" cy="90" r="70" strokeLinecap="round" />
            </svg>
        </div>
    );
}

export default ProgressBar;
