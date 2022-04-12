import React from "react";
import "./testResultsPage.css";
import { AiOutlineHome } from "react-icons/ai";

function TestResultsPage() {
    return (
        <div>
            <header>
                <div>Home / Test TCF / Resultats de test</div>
                <div className="button">
                    <AiOutlineHome className="icon" /> Retour à la page
                    d'accueil
                </div>
            </header>
        </div>
    );
}

export default TestResultsPage;
