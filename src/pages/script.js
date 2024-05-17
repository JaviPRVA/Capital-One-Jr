import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import "./Quiz.css"; // Import the quiz.css file

const questions = [
    {
        question: "What is the best way to save money?",
        answers: [
            { option: "A. Keeping all your money in a checking account", correct: false },
            { option: "B. Investing in the stock market", correct: false },
            { option: "C. Putting money into a savings account", correct: true }
        ]
    },
    {
        question: "What is the purpose of a budget?",
        answers: [
            { option: "A. To spend as much money as possible", correct: false },
            { option: "B. To track income and expenses", correct: true },
            { option: "C. To avoid paying taxes", correct: false }
        ]
    },
    // Add more questions here...
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(100);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 0) {
                    clearInterval(interval); // Stop the timer
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const displayQuestion = () => {
        const question = questions[currentQuestion];
        return (
            <div>
                <div>{question.question}</div>
                <div>
                    {question.answers.map((answer, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                name="answer"
                                value={answer.option}
                                onChange={() => setSelectedAnswer(answer.option)}
                                disabled={isAnswered}
                            />
                            {answer.option}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const checkAnswer = () => {
        if (!selectedAnswer) {
            alert('Please select an answer.');
            return;
        }

        if (selectedAnswer === questions[currentQuestion].answers.find(ans => ans.correct).option) {
            setScore(score + 1);
        }

        setIsAnswered(true);

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer('');
                setIsAnswered(false);
            } else {
                setQuizCompleted(true);
            }
        }, 1000); // Delay for 1 second before moving to the next question or showing the result
    };

    const restartGame = () => {
        setCurrentQuestion(0);
        setScore(0);
        setTimer(100);
        setSelectedAnswer('');
        setIsAnswered(false);
        setQuizCompleted(false);
    };

    if (quizCompleted) {
        return (
            <div>
                <Navbar />
                <div className="container mx-auto py-8 literacyTest bg-[#BEE6F4] h-screen">
                    <h1 className="text-3xl font-bold">Game Over!</h1>
                    <p>Your score is: {score}/{questions.length}</p>
                    <button id="restartButton" onClick={restartGame} type="button">Restart Game</button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8 literacyTest bg-[#BEE6F4] h-screen">
                <h1 className="text-3xl font-bold">Financial Literacy Game</h1>
                <p>Welcome to the CapitalOne Jr.'s Financial Literacy Game!</p>
                <p>Answer the following questions to test your financial knowledge:</p>
                <div id="questionContainer">
                    <form id="quizForm">
                        <div id="question">{displayQuestion()}</div>
                    </form>
                </div>
                <div id="timer">Time Left: {timer}s</div>
                <div id="result"></div>
                <button type="button" onClick={checkAnswer} disabled={isAnswered}>Next</button>
            </div>
        </div>
    );
};

export default Quiz;
