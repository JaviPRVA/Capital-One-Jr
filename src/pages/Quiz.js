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
    {
        question: "How can you earn money to put into your savings account?",
        answers: [
            { option: 'A. By "borrowing" your parents card for money', correct: false },
            { option: "B. By selling lemonade", correct: true },
            { option: "C. By playing video games all day", correct: false }
        ]
    },
    {
        question: "What is a credit card used for?",
        answers: [
            { option: "A. To buy things now and pay for them later", correct: true },
            { option: "B. To save money for emergencies", correct: false },
            { option: "C. To give as a gift to friends", correct: false }
        ]
    },
    {
        question: "How do you pay off credit on a credit card?",
        answers: [
            { option: "A. By paying the credit card company the amount you owe", correct: true },
            { option: "B. By asking your parents to lend you money", correct: false },
            { option: "C. By buying more things with the credit card", correct: false }
        ]
    },
    {
        question: "What is interest on a credit card?",
        answers: [
            { option: "A. Money the bank pays you for using their card", correct: false },
            { option: "B. Money you have to pay the bank for borrowing money", correct: true },
            { option: "C. Money you get from your parents for good grades", correct: false }
        ]
    },
    {
        question: "Why is it important to pay your credit card bill on time?",
        answers: [
            { option: "A. Because the bank will give you more money", correct: false },
            { option: "B. Because you might have to pay extra fees or interest", correct: true },
            { option: "C. Don't do it because it's fun to pay bills late", correct: false }
        ]
    },
    {
        question: "What is a budget?",
        answers: [
            { option: "A. A list of all the toys you want to buy", correct: false },
            { option: "B. A plan for how you will spend and save your money", correct: true },
            { option: "C. A game you play with your friends", correct: false }
        ]
    },
    {
        question: "How can you save money when shopping for toys or clothes?",
        answers: [
            { option: "A. By always buying the most expensive items", correct: false },
            { option: "B. By looking for sales or using coupons", correct: true },
            { option: "C. By asking your parents for more money", correct: false }
        ]
    },
    {
        question: "What is the difference between a debit card and a credit card?",
        answers: [
            { option: "A. Debit cards are for adults, and credit cards are for kids", correct: false },
            { option: "B. Debit cards take money directly from your bank account, while credit cards borrow money from the bank", correct: true },
            { option: "C. There is no difference, they are the same thing", correct: false }
        ]
    },
    {
        question: "How can Capital One help you learn about money?",
        answers: [
            { option: "A. By teaching you how to save and spend wisely through Capital One Jr. programs", correct: true },
            { option: "B. By giving you free toys and games", correct: false },
            { option: "C. By showing you how to buy lots of things you want without saving money", correct: false }
        ]
    }
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
                  setQuizCompleted(true); // Set quiz as completed when timer runs out
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
              <div className="mx-auto py-8 literacyTest bg-[#BEE6F4] h-screen">
                  <h1 className="pb-5 text-3xl font-bold">Game Over!</h1>
                  <p className="">Your score is: {score}/{questions.length}</p>
                  <button id="restartButton" onClick={restartGame} type="button">Restart Game</button>
              </div>
          </div>
      );
  }

  return (
      <div>
          <Navbar />
          <div className="mx-auto py-8 literacyTest bg-[#BEE6F4] h-screen">
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