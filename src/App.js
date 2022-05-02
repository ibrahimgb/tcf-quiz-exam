import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"; ////////////////////////////////////////////
import "./App.css";
import QuizzSection from "./compoments/quizzPage/QuizzSection";
import TestResultsPage from "./compoments/testResultsPage/TestResultsPage";
import HomePage from "./compoments/home/HomePage";
import Login from "./compoments/logIn/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/test-results" element={<TestResultsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quizz" element={<QuizzSection />} />
            </Routes>
        </Router>
    );
}

export default App;
